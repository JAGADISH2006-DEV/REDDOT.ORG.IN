# reddot.co.in - AI-Powered Website

A modern, futuristic, AI-powered website built with Next.js, TailwindCSS, and Framer Motion, featuring an intelligent chatbot powered by Groq API.

## 🚀 Features

### 🎨 Modern Design
- **Futuristic UI**: Dark theme with gradient accents and AI-inspired animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **SEO Optimized**: Built-in SEO with meta tags, sitemap, and robots.txt

### 🤖 AI Integration
- **Groq-Powered Chatbot**: Intelligent AI assistant for customer support and lead generation
- **Floating Chat Widget**: Always accessible chat interface with minimization options
- **Real-time Responses**: Lightning-fast AI responses using Groq's high-performance LLMs
- **Context-Aware**: AI understands company services and can provide detailed information

### 📱 Sections

1. **Hero Section** 🚀
   - Eye-catching headline and animated background
   - Multiple CTAs: Get Started, View Projects, Chat with AI
   - Live statistics and achievements

2. **Services** 🤖
   - 9 comprehensive AI services including:
     - AI Agents & Automations
     - AI SaaS Applications
     - AI Customer Service Chatbots
     - AI Education & Mentorship
   - Interactive cards with hover effects
   - Feature lists and category badges

3. **Projects Portfolio** 💼
   - 6 featured projects with filtering by category
   - Project cards with technologies, status, and demo links
   - Hover effects and detailed descriptions
   - Live demo and GitHub links

4. **About/Founder** 👨‍💻
   - Founder photo and detailed biography
   - Mission and vision statements
   - Key achievements and statistics
   - Core expertise and skills
   - Direct contact information

5. **Testimonials** 🌟
   - Carousel with client success stories
   - 5-star rating system
   - Auto-play with manual navigation
   - Additional testimonial grid

6. **Blog/Learning Hub** 📚
   - Featured blog posts with filtering
   - Categories: Tutorials, Case Studies, Guides
   - Reading time estimates and author information
   - Newsletter subscription CTA

7. **Contact** 📩
   - Comprehensive contact form with project details
   - Service selection and budget/timeline options
   - Contact information and social links
   - Quick response guarantee

8. **Footer** ⚡
   - Organized navigation links
   - Social media links
   - Company information
   - Additional chat button

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **AI Integration**: Groq SDK for chat functionality
- **Database**: MongoDB with connection pooling
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design approach

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reddot-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Groq API Configuration
   GROQ_API_KEY=your_groq_api_key_here

   # MongoDB Configuration (optional - for contact form storage)
   MONGODB_URI=mongodb://localhost:27017/reddot-website
   MONGODB_DB_NAME=reddot-website

   # Contact Form Configuration
   CONTACT_EMAIL=keerthijai909@gmail.com
   
   # Note: Email notifications will work without EMAIL_PASSWORD
   # Form submissions are stored in memory and logged to console
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Groq API Setup
1. Sign up at [Groq Console](https://console.groq.com/)
2. Create a new API key
3. Add it to your `.env.local` file

### MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Update the `MONGODB_URI` in your `.env.local` file
3. The application will automatically create necessary collections

### Customization
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Content**: Update `src/data/index.ts` for services, projects, and testimonials
- **SEO**: Modify `src/app/layout.tsx` for meta tags and site information

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── chat/          # Groq AI chat endpoint
│   │   └── contact/       # Contact form handler
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # SEO robots.txt
│   └── sitemap.ts        # SEO sitemap
├── components/            # React components
│   ├── chat/             # Chat-related components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── data/                 # Static data and content
├── lib/                  # Utility functions and configs
├── types/                # TypeScript type definitions
└── public/               # Static assets
    └── images/           # Image assets
```

## 🤖 AI Chatbot Features

### Capabilities
- **Service Information**: Detailed explanations of all AI services
- **Project Portfolio**: Information about completed projects
- **Lead Qualification**: Collects user information for potential leads
- **Technical Support**: Answers technical questions about AI implementations
- **Consultation Booking**: Helps schedule meetings with the founder

### Conversation Flow
1. **Welcome Message**: Introduces the AI assistant
2. **Query Processing**: Uses Groq API for intelligent responses
3. **Context Awareness**: Maintains conversation context
4. **Lead Generation**: Identifies and qualifies potential clients
5. **Human Handoff**: Escalates complex queries when needed

## 🔄 API Endpoints

### Chat API (`/api/chat`)
- **Method**: POST
- **Purpose**: Process chat messages with Groq AI
- **Request**: `{ message: string, conversationId?: string }`
- **Response**: `{ response: string, conversationId: string, timestamp: string }`

### Contact API (`/api/contact`)
- **Method**: POST
- **Purpose**: Handle contact form submissions
- **Request**: Contact form data object
- **Response**: Success confirmation and timestamp

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Automated Deployment
Run the deployment script:
```bash
node deploy.js
```

Before running, edit `deploy.js` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Database and application hosting
- **DigitalOcean**: App Platform deployment

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Components load as needed
- **Animation Performance**: Optimized Framer Motion animations
- **Bundle Splitting**: Automatic code splitting
- **SEO Optimization**: Complete meta tags and structured data

## 🔒 Security

- **Environment Variables**: Sensitive data in env files
- **API Rate Limiting**: Prevent abuse of chat endpoint
- **Input Validation**: Sanitize all user inputs
- **CORS Configuration**: Secure cross-origin requests

## 🎨 Customization Guide

### Updating Content
1. **Services**: Edit `src/data/index.ts` services array
2. **Projects**: Update projects array with your portfolio
3. **Testimonials**: Add client testimonials to testimonials array
4. **Blog Posts**: Modify blogPosts array for your content
5. **Founder Photo**: Replace the placeholder image URL in `src/components/sections/About.tsx` with your actual photo
   - Save your photo as `public/images/founder/jai-keerthi.jpg`
   - Update the image src to `/images/founder/jai-keerthi.jpg`

### Styling Changes
1. **Colors**: Update `tailwind.config.js` color palette
2. **Fonts**: Modify font imports in `src/app/layout.tsx`
3. **Animations**: Customize Framer Motion variants in components

### AI Personality
1. **System Prompt**: Edit the SYSTEM_PROMPT in `src/app/api/chat/route.ts`
2. **Quick Actions**: Customize quick response buttons in ChatWidget
3. **Welcome Message**: Update initial message in ChatWidget component

## 📞 Support & Contact

- **Email**: jai@reddot.co.in
- **Phone**: +91 98765 43210
- **Location**: Chennai, India
- **Business Hours**: 9 AM - 6 PM IST

## 📄 License

This project is proprietary software owned by reddot.co.in. All rights reserved.

## 🙏 Acknowledgments

- **Groq**: For providing high-performance AI inference
- **Vercel**: For Next.js framework and hosting platform
- **Tailwind CSS**: For utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Unsplash**: For placeholder images

---

Built with ❤️ by **Jai Keerthi** for **reddot.co.in**