import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <Projects />
            <About />
            <Courses />
            <Contact />
        </main>
    );
}
