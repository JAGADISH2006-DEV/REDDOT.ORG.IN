"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
    const count = 4000;
    const mesh = useRef<THREE.Points>(null!);
    const { mouse, viewport } = useThree();

    // State for shape shifting
    const [shape, setShape] = useState<'field' | 'sphere'>('field');

    // Automatic shape shifting effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShape(prev => prev === 'field' ? 'sphere' : 'field');
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Generate particles for both shapes
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const sphere = new Float32Array(count * 3);

        // Field Layout
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60;
            const y = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 20;
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }

        // Sphere Layout
        const radius = 12;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            sphere[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
            sphere[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            sphere[i * 3 + 2] = radius * Math.cos(phi);
        }

        return { field: temp, sphere: sphere };
    }, [count]);

    // Current positions buffer
    const currentPositions = useMemo(() => new Float32Array(particles.field), [particles]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const { width, height } = viewport;

        // Access positions attribute
        // @ts-ignore
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Determine target position based on mode
            let tx, ty, tz;

            if (shape === 'field') {
                const xBase = particles.field[i3];
                const yBase = particles.field[i3 + 1];
                const zBase = particles.field[i3 + 2];

                // Wave motion
                tx = xBase + Math.sin(yBase * 0.1 + time * 0.5) * 0.5;
                ty = yBase + Math.cos(xBase * 0.1 + time * 0.3) * 0.5;
                tz = zBase + Math.sin(xBase * 0.1 + time * 0.2) * 2;
            } else {
                const xBase = particles.sphere[i3];
                const yBase = particles.sphere[i3 + 1];
                const zBase = particles.sphere[i3 + 2];

                // Rotate sphere
                const rotSpeed = time * 0.2;
                const cosT = Math.cos(rotSpeed);
                const sinT = Math.sin(rotSpeed);

                tx = xBase * cosT - zBase * sinT;
                ty = yBase;
                tz = xBase * sinT + zBase * cosT;
            }

            // Interactive Mouse Force
            // Approximate screen to world mapping
            const mouseX = (mouse.x * width) / 2;
            const mouseY = (mouse.y * height) / 2;

            const dx = positions[i3] - mouseX;
            const dy = positions[i3 + 1] - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let forceX = 0;
            let forceY = 0;

            if (dist < 5) {
                const force = (5 - dist) / 5;
                forceX = dx * force * 3;
                forceY = dy * force * 3;
            }

            // Lerp to target
            // We use a small factor (0.05) for smooth "magnetic" and morphing transitions
            positions[i3] += (tx + forceX - positions[i3]) * 0.05;
            positions[i3 + 1] += (ty + forceY - positions[i3 + 1]) * 0.05;
            positions[i3 + 2] += (tz - positions[i3 + 2]) * 0.05;
        }

        // @ts-ignore
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={currentPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.12}
                color="#FF8C00"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ParticleField />
            </Canvas>
        </div>
    );
}
