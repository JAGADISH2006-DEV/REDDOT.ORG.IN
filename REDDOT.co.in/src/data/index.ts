import { Video, Bot, BrainCircuit, LineChart, Code2, Users, Rocket, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
];

export const services = [
    {
        title: 'AI Agents & Automations',
        description: 'Custom AI agents that automate complex workflows and business processes.',
        icon: Bot,
        tag: 'Ai Agents',
        features: [
            'Multi-agent system architecture',
            'Natural language processing',
            'Task automation & workflow optimization',
            'Decision making algorithms'
        ],
        benefits: [
            'Reduce operational costs by 40%',
            '24/7 autonomous workflow execution',
            'Eliminate human error in repetitive tasks',
            'Scalable workforce on demand'
        ],
        useCases: [
            'Customer support automation',
            'Data entry and processing',
            'Supply chain management',
            'Financial reporting'
        ],
        techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'Docker']
    },
    {
        title: 'AI SaaS Applications',
        description: 'Scalable, AI-powered software as a service solutions built for growth.',
        icon: Rocket,
        tag: 'SaaS',
        features: [
            'Scalable cloud architecture',
            'AI-powered analytics',
            'Real-time data processing',
            'Secure multi-tenancy'
        ],
        benefits: [
            'Rapid automated scaling',
            'Data-driven user insights',
            'Recurring revenue models',
            'High availability architecture'
        ],
        useCases: [
            'Marketing automation platforms',
            'HR management systems',
            'Project management tools',
            'Healthcare management'
        ],
        techStack: ['Next.js', 'React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
        title: 'AI Websites & Mobile Apps',
        description: 'Modern, responsive web and mobile applications enhanced with AI capabilities for superior user experiences.',
        icon: Code2,
        tag: 'App Dev',
        features: [
            'Responsive design',
            'AI chatbots integration',
            'Personalization engines',
            'Cross-platform compatibility'
        ],
        benefits: [
            'Enhanced user engagement',
            'Personalized user journeys',
            'Cross-platform reach',
            'Modern intuitive UI/UX'
        ],
        useCases: [
            'E-commerce platforms',
            'Booking systems',
            'Social networking apps',
            'Educational portals'
        ],
        techStack: ['React Native', 'Flutter', 'Firebase', 'GraphQL', 'Tailwind']
    },
    {
        title: 'AI Content Creation',
        description: 'Intelligent content generation platform that creates high-quality, engaging content across multiple formats and platforms using advanced AI.',
        icon: BrainCircuit,
        tag: 'Content',
        features: [
            'Multi-format content generation',
            'Brand voice consistency',
            'SEO optimization',
            'Automated scheduling'
        ],
        benefits: [
            '10x faster content production',
            'Consistent brand voice',
            'Higher SEO rankings',
            'Multi-channel distribution'
        ],
        useCases: [
            'Blog post generation',
            'Social media management',
            'Ad copy creation',
            'Email marketing campaigns'
        ],
        techStack: ['GPT-4', 'Midjourney API', 'Python', 'Celery', 'Redis']
    },
    {
        title: 'AI Internship Program',
        description: 'Comprehensive AI internship program that provides hands-on experience with cutting-edge AI technologies and real-world projects.',
        icon: Users,
        tag: 'Education',
        features: [
            'Hands-on AI project experience',
            '1-on-1 mentorship with AI experts',
            'Real client project exposure',
            'Career guidance'
        ],
        benefits: [
            'Gain 6+ months of practical AI experience',
            'Build a professional AI portfolio',
            'Direct mentorship from industry experts',
            'Potential full-time job opportunities'
        ],
        useCases: [
            'Recent computer science graduates',
            'Career transition to AI field',
            'Students seeking practical experience',
            'Professionals upskilling in AI'
        ],
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Git', 'Docker', 'AWS/Azure']
    },
    {
        title: 'Embedded Systems with IoT',
        description: 'Smart embedded systems and IoT solutions that connect physical devices to intelligent cloud platforms for automation and monitoring.',
        icon: LineChart,
        tag: 'IoT',
        features: [
            'Custom embedded system design',
            'IoT connectivity and protocols',
            'Real-time data monitoring',
            'Edge computing integration'
        ],
        benefits: [
            'Real-time remote monitoring',
            'Predictive maintenance',
            'Energy efficiency',
            'Automated control systems'
        ],
        useCases: [
            'Smart home automation',
            'Industrial IoT (IIoT)',
            'Wearable health devices',
            'Smart agriculture'
        ],
        techStack: ['C/C++', 'Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT']
    },
    {
        title: 'AI Data & Analytics',
        description: 'Transform raw data into actionable insights using advanced AI analytics.',
        icon: LineChart,
        tag: 'Analytics',
        features: [
            'Predictive modeling',
            'Data visualization',
            'Business intelligence',
            'Big data processing'
        ],
        benefits: [
            'Data-driven decision making',
            'Identify market trends',
            ' optimize operational efficiency',
            'Risk mitigation'
        ],
        useCases: [
            'Financial forecasting',
            'Customer churn prediction',
            'Sales performance analysis',
            'Supply chain optimization'
        ],
        techStack: ['Python', 'Pandas', 'Tableau', 'PowerBI', 'Snowflake']
    },
    {
        title: 'AI Voice & Vision Apps',
        description: 'Tailored AI solutions designed to meet unique business challenges.',
        icon: Code2,
        tag: 'Voice & Vision',
        features: [
            'Computer vision',
            'Speech recognition',
            'Object detection',
            'Voice synthesis'
        ],
        benefits: [
            'Enhanced accessibility',
            'Automated visual inspection',
            'Natural voice interactions',
            'Improved security'
        ],
        useCases: [
            'Facial recognition entry',
            'Voice-controlled assistants',
            'Quality control inspection',
            'Automated transcription'
        ],
        techStack: ['OpenCV', 'Whisper', 'YOLO', 'TensorFlow', 'React']
    },
    {
        title: 'AI Education & Mentorship',
        description: 'Comprehensive training and mentorship programs to master AI technologies.',
        icon: BrainCircuit,
        tag: 'Education',
        features: [
            'Customized curriculum',
            'Expert led sessions',
            'Practical workshops',
            'Certification'
        ],
        benefits: [
            'Accelerated learning curve',
            'Industry-relevant skills',
            'Networking opportunities',
            'Verified certification'
        ],
        useCases: [
            'Corporate team training',
            'Individual upskilling',
            'University workshops',
            'Bootcamp programs'
        ],
        techStack: ['Python', 'Jupyter', 'Keras', 'Scikit-learn', 'Hugging Face']
    },
];

export const projects = [
    {
        title: 'Jarvis AI',
        category: 'AI Assistant',
        description: 'An advanced personal AI assistant capable of handling complex tasks, scheduling, and natural language interactions.',
        technologies: ['Python', 'NLP', 'React', 'FastAPI', 'PostgreSQL'],
        link: 'https://github.com/jaikeerthi07/JARVIS-AI-2.0.git',
        status: 'Completed',
        image: '/images/projects/jarvis.png',
        details: {
            overview: 'Jarvis AI is a sophisticated personal assistant designed to streamline daily productivity and automate routine tasks. Unlike standard voice assistants, Jarvis understands context, remembers past interactions, and can execute complex multi-step workflows.',
            features: [
                'Context-aware conversation capability',
                'Calendar management and smart scheduling',
                'Email summarization and drafting',
                'IoT device control integration',
                'Custom voice profiles'
            ],
            challenge: 'Building a system that could maintain context over long conversations while keeping latency low for real-time interaction.',
            solution: 'Implemented a hybrid memory architecture using Redis for short-term context and a vector database for long-term memory retrieval.'
        }
    },
    {
        title: 'Universal Web Scraper Agent',
        category: 'Automation',
        description: 'A powerful agent that scrapes data from all social media platforms using Apify, enabling comprehensive data gathering and analysis.',
        technologies: ['Apify', 'Node.js', 'Puppeteer', 'MongoDB', 'Docker'],
        link: 'https://github.com/jaikeerthi07/web-scraping.git',
        status: 'Completed',
        image: '/images/projects/scraper.png',
        details: {
            overview: 'The Universal Web Scraper Agent provides enterprise-grade data extraction capabilities. It is built to handle dynamic content, infinite scrolling, and anti-bot measures to gather high-quality structured data from the web.',
            features: [
                'Intelligent proxy rotation to avoid bans',
                'Automatic CAPTCHA solving',
                'Structured output in JSON/CSV formats',
                'Scheduled recurring scraping jobs',
                'Real-time data validation'
            ],
            challenge: 'Overcoming sophisticated anti-scraping technologies implemented by major social media platforms.',
            solution: 'Developed a browser fingerprinting management system that mimics human behavior patterns to remain undetected.'
        }
    },
    {
        title: 'AI Travel Planning App',
        category: 'Consumer App',
        description: 'Intelligent travel companion that generates personalized itineraries, books flights/hotels, and provides real-time travel advice.',
        technologies: ['React Native', 'OpenAI', 'Google Maps API', 'Amadeus API'],
        link: 'https://github.com/jaikeerthi07/travel-planning-itenary-multiagent.git',
        status: 'Completed',
        image: '/images/projects/travel.png',
        details: {
            overview: 'This AI Travel Planning App takes the stress out of trip planning. By analyzing user preferences and real-time travel data, it creates bespoke itineraries giving users a complete travel plan in seconds.',
            features: [
                'Personalized itinerary generation based on budget and interests',
                'Real-time flight and hotel price tracking',
                'Interactive maps with local recommendations',
                'Offline mode for access during travel',
                'Shared trip planning for groups'
            ],
            challenge: 'Integrating data from multiple disparate travel APIs while ensuring real-time availability and pricing accuracy.',
            solution: 'Built a unified caching layer and aggregation engine that normalizes data from all providers into a single coherent schema.'
        }
    },
    {
        title: 'Customized Large Language Model',
        category: 'Enterprise AI',
        description: 'Fine-tuned LLMs tailored for specific industry domains, offering superior accuracy and context-awareness for business needs.',
        technologies: ['PyTorch', 'Transformers', 'Hugging Face', 'AWS SageMaker'],
        link: 'https://github.com/jaikeerthi07/jai-llm.git',
        status: 'Completed',
        image: '/images/projects/llm.png',
        details: {
            overview: 'Our Customized LLM solution provides businesses with private, secure, and highly specialized AI models. We fine-tune state-of-the-art foundation models on proprietary data to deliver exceptional performance in niche domains.',
            features: [
                'Domain-specific vocabulary and knowledge',
                'On-premise deployment options for data security',
                'Reduced hallucination rates compared to general models',
                'Integration with internal knowledge bases',
                'Compliance with industry regulations (HIPAA, GDPR)'
            ],
            challenge: 'Ensuring model accuracy without catastrophic forgetting of general language capabilities during fine-tuning.',
            solution: 'Utilized Parameter-Efficient Fine-Tuning (PEFT) and LoRA techniques to adapt models efficiently while preserving their core reasoning abilities.'
        }
    },
    {
        title: 'AI Medical Silent Emergency System',
        category: 'Healthcare',
        description: 'A silent emergency alert system powered by AI that detects medical distress signals and automatically notifies emergency services.',
        technologies: ['IoT', 'Machine Learning', 'Cloud', 'Azure IoT Hub'],
        link: '#',
        status: 'Completed',
        image: '/images/projects/medical.png',
        details: {
            overview: 'The AI Medical Silent Emergency System is a life-saving innovation that monitors vital signs and detecting abnormalities. It autonomously alerts emergency responders with precise location and patient data when critical thresholds are breached.',
            features: [
                'Real-time vital sign monitoring (HR, SpO2)',
                'Fall detection and anomaly recognition',
                'Silent alert transmission to emergency contacts',
                'GPS location tracking',
                'Secure health data transmission'
            ],
            challenge: 'Minimizing false positives to prevent alarm fatigue while ensuring 100% detection of genuine emergencies.',
            solution: 'Developed a multi-modal sensor fusion algorithm that cross-references vital signs with motion data to verify distress events.'
        }
    },
];

export const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow',
        content: 'Reddot.co.in transformed our business operations with their incredible AI automation solutions.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Founder, StartUp Inc',
        content: 'The AI chatbot they built for us increased our lead generation by 300% in just one month.',
        rating: 5,
    },
];

export const courses = [
    {
        id: 'c1',
        title: 'Complete AI & Machine Learning Masterclass',
        description: 'Master the fundamentals of Artificial Intelligence and Machine Learning. Learn Python, Data Science, and build real-world AI models.',
        category: 'AI & ML',
        thumbnail: '/images/courses/ai-ml.jpg',
        duration: '12h 45m',
        lessons: [
            {
                title: 'Introduction to AI & Python Basics',
                duration: '45 min',
                videoId: 'v1',
                script: "Welcome to the Masterclass on Artificial Intelligence and Machine Learning. In this introductory session, we will demystify the core concepts of AI and set up our Python environment. Artificial Intelligence, broadly speaking, is the simulation of human intelligence processes by machines. These processes include learning, reasoning, and self-correction. We often categorize AI into two main types: Narrow AI, which is designed for a specific task like facial recognition, and General AI, which possesses the ability to perform any intellectual task that a human being can. Today's Python ecosystem, with powerful libraries like TensorFlow and PyTorch, makes building these systems accessible. We'll start by installing Anaconda and setting up a Jupyter Notebook environment, which is the industry standard for data science experimentation. Then, we will write our first Python script to manipulate data using NumPy, the fundamental package for scientific computing."
            },
            {
                title: 'Data Preprocessing & Analysis',
                duration: '1h 20 min',
                videoId: 'v2',
                script: "Data is the fuel for any AI engine. Without clean, structured data, even the most advanced algorithms will fail. In this lesson on Data Preprocessing, we will learn how to handle missing values, encode categorical variables, and scale our features. We'll use the Pandas library, a powerhouse for data manipulation. You'll learn the difference between standardization and normalization, and when to apply each. We will also explore techniques for detecting outliers that could skew our model's performance. By the end of this hour, you will be able to take a raw, messy dataset and transform it into a pristine format ready for training machine learning models."
            },
            {
                title: 'Supervised Learning Algorithms',
                duration: '2h 10 min',
                videoId: 'v3',
                script: "Now that we have our data ready, it's time to teach our machine. Supervised Learning is the most common type of machine learning, where we train a model on labeled data. This means we show the computer pairs of inputs and their corresponding correct outputs. We will cover fundamental algorithms like Linear Regression for predicting continuous values, and Logistic Regression for classification tasks. We'll also dive into Decision Trees and Random Forests, which are powerful and intuitive methods for handling complex datasets. We will discuss the bias-variance tradeoff, a critical concept in ensuring your model generalizes well to new, unseen data."
            },
            {
                title: 'Neural Networks Fundamentals',
                duration: '1h 45 min',
                videoId: 'v4',
                script: "Welcome to the world of Deep Learning. Neural Networks are inspired by the biological structure of the human brain. They consist of layers of interconnected nodes, or neurons, that process information. In this lesson, we will build a simple Multi-Layer Perceptron (MLP) from scratch. We'll understand the role of activation functions like ReLU and Sigmoid, which introduce non-linearity into our network, allowing it to learn complex patterns. We will also demystify Backpropagation, the algorithm that allows the network to learn from its errors by adjusting its weights. Get ready to train your first neural network!"
            }
        ],
        resources: [
            { title: 'Course Slides (PDF)', link: '#', type: 'pdf' },
            { title: 'Source Code (GitHub)', link: '#', type: 'code' }
        ]
    },
    {
        id: 'c2',
        title: 'Deep Learning with PyTorch & TensorFlow',
        description: 'Dive deep into Neural Networks, CNNs, and RNNs. Learn to build advanced Deep Learning applications using industry-standard frameworks.',
        category: 'Deep Learning',
        thumbnail: '/images/courses/dl.jpg',
        duration: '15h 30m',
        lessons: [
            {
                title: 'TensorFlow vs PyTorch',
                duration: '50 min',
                videoId: 'v5',
                script: "The battle of the frameworks: TensorFlow versus PyTorch. Both are incredible tools for deep learning, but they have distinct philosophies. TensorFlow, developed by Google, is known for its robust production capabilities and static computation graphs (though eager execution has changed this). PyTorch, from Meta AI, is favored by researchers for its dynamic computation graph and 'Pythonic' feel. In this session, we will compare them side-by-side. We'll write the same neural network code in both frameworks to highlight the syntactical differences. By the end, you'll be able to decide which framework best suits your project needs."
            },
            {
                title: 'Building CNNs for Image Recognition',
                duration: '2h 30 min',
                videoId: 'v6',
                script: "Convolutional Neural Networks, or CNNs, have revolutionized computer vision. From self-driving cars to medical imaging, CNNs are everywhere. In this comprehensive lesson, we will break down the architecture of a CNN. We'll understand Convolutional Layers, which detect features like edges and textures, and Pooling Layers, which reduce spatial dimensions. We will build a CNN to classify images from the CIFAR-10 dataset. We'll also discuss advanced architectures like ResNet and VGG, and how Transfer Learning allows us to leverage these powerful pre-trained models for our own custom tasks."
            },
            {
                title: 'RNNs & LSTMs for Sequence Data',
                duration: '2h 15 min',
                videoId: 'v7',
                script: "Standard neural networks assume inputs are independent of each other. But what about sequential data like text, time-series, or audio? Enter Recurrent Neural Networks (RNNs). RNNs have a 'memory' that allows them to utilize information from previous inputs. However, standard RNNs suffer from the vanishing gradient problem. This is where Long Short-Term Memory networks (LSTMs) shine. In this lesson, we will explore the internal gates of an LSTM cell and understand how they regulate the flow of information. We will apply this knowledge to build a stock price predictor and a simple sentiment analysis model."
            }
        ],
        resources: [
            { title: 'Deep Learning Cheatsheet', link: '#', type: 'pdf' },
            { title: 'Model Architecture Diagrams', link: '#', type: 'pdf' }
        ]
    },
    {
        id: 'c3',
        title: 'Data Science Bootcamp: Zero to Hero',
        description: 'Comprehensive Data Science training. master Pandas, NumPy, Visualization, and Statistical Analysis for data-driven decision making.',
        category: 'Data Science',
        thumbnail: '/images/courses/ds.jpg',
        duration: '18h 15m',
        lessons: [
            {
                title: 'Exploratory Data Analysis (EDA)',
                duration: '1h 40 min',
                videoId: 'v8',
                script: "Exploratory Data Analysis, or EDA, is the detective work of Data Science. Before we build models, we must understand our data. In this session, we will use Python to perform univariate and bivariate analysis. We'll look at the distribution of variables, check for correlations, and identify potential data quality issues. We will learn how to ask the right questions about our data. For instance, 'Is the target variable balanced?' or 'Are there missing values that follow a pattern?'. EDA is not just about generating plots; it's about gaining intuition and deriving hypotheses that will guide the entire modeling process."
            },
            {
                title: 'Statistical Inference',
                duration: '2h 00 min',
                videoId: 'v9',
                script: "Data Science is built on the foundation of Statistics. In this lesson, we will bridge the gap between descriptive statistics and inferential statistics. We will cover Hypothesis Testing, P-values, and Confidence Intervals. We'll define what 'statistically significant' actually means and how to avoid common pitfalls like p-hacking. We will also perform A/B testing analysis, a critical skill for any data scientist working in product or marketing analytics. By understanding the underlying probability distributions, you will be able to make robust conclusions from your data samples."
            },
            {
                title: 'Data Visualization with Matplotlib',
                duration: '1h 30 min',
                videoId: 'v10',
                script: "A picture is worth a thousand rows of data. Effective data visualization is crucial for communicating your findings to stakeholders. We will master Matplotlib and Seaborn, the primary plotting libraries in Python. We'll go beyond basic bar charts and line graphs. We will create heatmaps to visualize correlation matrices, box plots to detect outliers, and violin plots to understand distributions. We'll also discuss the principles of good design—how to choose the right color palettes, label axes correctly, and avoid misleading representations. You will learn to tell a compelling story with your data."
            }
        ],
        resources: [
            { title: 'Jupyter Notebooks', link: '#', type: 'code' },
            { title: 'Datasets', link: '#', type: 'code' }
        ]
    },
    {
        id: 'c4',
        title: 'Generative AI & LLMs: The Future',
        description: 'Understand Large Language Models, Prompt Engineering, and how to build applications using OpenAI API, LangChain, and vector databases.',
        category: 'Generative AI',
        thumbnail: '/images/courses/gen-ai.jpg',
        duration: '10h 20m',
        lessons: [
            {
                title: 'Intro to LLMs & GPT-4',
                duration: '1h 10 min',
                videoId: 'v11',
                script: "Large Language Models (LLMs) like GPT-4 have fundamentally changed the AI landscape. In this lesson, we'll explore what makes these models 'large' and how they are trained on massive datasets of text. We will discuss the Transformer architecture, the backbone of modern NLP, specifically the 'Attention Mechanism' that allows the model to weigh the importance of different words in a sentence. We'll also cover the capabilities and limitations of LLMs—what they are good at, like summarization and coding, and where they struggle, such as logical reasoning and factual accuracy. Understanding these foundations is key to building effective applications."
            },
            {
                title: 'Prompt Engineering Strategies',
                duration: '1h 45 min',
                videoId: 'v12',
                script: "Prompt Engineering is the art of communicating with an AI to get the best possible result. It's more than just asking a question. In this deep dive, we will cover advanced strategies like Zero-shot, One-shot, and Few-shot prompting. We'll explore Chain-of-Thought (CoT) prompting, which encourages the model to 'think' step-by-step, significantly improving performance on complex reasoning tasks. We'll also look at techniques to reduce hallucinations and ensure consistent output formatting, such as asking for JSON responses. You will learn how to craft robust prompts that turn a generic LLM into a specialized tool."
            },
            {
                title: 'Building Chatbots with LangChain',
                duration: '2h 30 min',
                videoId: 'v13',
                script: "LangChain has emerged as the de facto framework for building LLM applications. It provides the glue to connect LLMs to other sources of data and computation. In this practical workshop, we will build a context-aware chatbot. We'll learn about 'Chains', which sequence multiple LLM calls, and 'Agents', which use the LLM as a reasoning engine to decide which actions to take. We will integrate memory components so the chatbot can remember past interactions. By the end of this lesson, you will have a functional chatbot running locally that can answer questions based on specific documents."
            },
            {
                title: 'RAG (Retrieval Augmented Generation)',
                duration: '1h 55 min',
                videoId: 'v14',
                script: "Retrieval Augmented Generation, or RAG, is the solution to the 'knowledge cutoff' problem of LLMs. RAG allows us to ground the model's responses in our own private data. We will build a complete RAG pipeline. First, we'll chunk our documents and embed them into vectors using OpenAI's embedding models. Then, we'll store them in a Vector Database like Pinecone or ChromaDB. Finally, we'll build a retrieval system that fetches the most relevant chunks based on the user's query and feeds them into the LLM as context. This enables you to build 'Chat with your PDF' style applications."
            }
        ],
        resources: [
            { title: 'Prompt Library', link: '#', type: 'pdf' },
            { title: 'LangChain Templates', link: '#', type: 'code' }
        ]
    },
    {
        id: 'c5',
        title: 'No-Code AI Automation: n8n & Flowise',
        description: 'Learn to build powerful AI worklows and agents without writing code. Master n8n for automation and Flowise for LLM chains.',
        category: 'Automation',
        thumbnail: '/images/courses/automation.jpg',
        duration: '8h 50m',
        lessons: [
            {
                title: 'Getting Started with n8n',
                duration: '1h 00 min',
                videoId: 'v15',
                script: "Automation is about working smarter, not harder. n8n is a powerful, fair-code workflow automation tool that lets you connect anything to anything. Unlike Zapier, it's node-based and visually intuitive. In this lesson, we'll install n8n (either self-hosted or cloud) and tour the interface. We will build our first workflow: a simple automation that monitors an RSS feed and posts updates to a Slack channel. You'll learn about Triggers, which start the workflow, and Nodes, which perform actions or transform data. We'll also cover how to use the 'Code' node to execute custom JavaScript when pre-built nodes aren't enough."
            },
            {
                title: 'Building Custom AI Workflows',
                duration: '1h 30 min',
                videoId: 'v16',
                script: "Now we combine automation with Intelligence. We will integrate OpenAI into our n8n workflows. Imagine an email arrives; n8n triggers, sends the content to GPT-4 to summarize it and detect the sentiment, and then routes it to the appropriate team—Customer Support if it's a complaint, or Sales if it's a lead. We will build this exact workflow step-by-step. We will also look at how to handle file attachments and use the 'HTTP Request' node to interact with any API that n8n doesn't natively support. This opens up endless possibilities for business process automation."
            },
            {
                title: 'Flowise & LangFlow Introduction',
                duration: '1h 20 min',
                videoId: 'v17',
                script: "Flowise and LangFlow are drag-and-drop UIs for building LLM apps, built on top of LangChain. They make the power of LangChain accessible without writing a single line of code. In this session, we will set up Flowise and explore its canvas. We'll construct a 'Conversational Retrieval QA Chain'—basically a chatbot that can answer questions from a specific document. We'll drag in a PDF loader, a text splitter, vector store, and an LLM model, connecting them visually. We will verify the chain in the built-in chat interface and see how easy it is to tweak parameters like 'temperature' to control creativity."
            },
            {
                title: 'Connecting LLMs to Real World Data',
                duration: '2h 10 min',
                videoId: 'v18',
                script: "The real magic happens when AI can interact with the outside world. In this advanced lesson, we will use Flowise Tools. We'll give our LLM agent access to a 'Google Search' tool and a 'Calculator' tool. This allows the AI to answer questions about current events (which it otherwise wouldn't know) and perform precise math (which LLMs often struggle with). We will observe the agent's reasoning process as it decides which tool to use. This is the foundation of building autonomous agents that can perform tasks on your behalf."
            }
        ],
        resources: [
            { title: 'Workflow JSON Files', link: '#', type: 'code' },
            { title: 'Automation Blueprints', link: '#', type: 'pdf' }
        ]
    }
];

export const contactInfo = {
    email: ['keerthijai909@gmail.com', 'jagadish2k2006@gmail.com'],
    phone: ['+91 80721 63133', '+91 80150 24729'],
    location: 'Chennai, India',
    social: [
        { name: 'GitHub', icon: Github, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
    ],
    businessHours: '9 AM - 6 PM IST',
};
