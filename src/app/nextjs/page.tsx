import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function NextJSPage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="React Framework"
        title1="Next.js"
        title2="Development"
      />
      
      {/* Main Content Section */}
      <div className="relative bg-gradient-to-b from-[#030303] to-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              prefetch={true}
              className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Frameworks
            </Link>
          </div>

          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
                         <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 4.317 8.296 8.918 9.695.779.234 1.62.422 2.748.528.368.034 1.935.034 2.304 0 1.128-.106 1.969-.294 2.748-.528 4.601-1.399 8.266-5.189 8.918-9.695.096-.659.108-.854.108-1.748s-.012-1.089-.108-1.747c-.652-4.506-4.317-8.296-8.918-9.695a19.299 19.299 0 0 0-2.748-.528A19.76 19.76 0 0 0 11.572 0zm5.069 7.217c.263 0 .527.107.714.321.186.214.279.515.279.857 0 .342-.093.643-.279.857a1.023 1.023 0 0 1-.714.321c-.263 0-.527-.107-.714-.321a1.023 1.023 0 0 1-.279-.857c0-.342.093-.643.279-.857.187-.214.451-.321.714-.321zm-10.138 0c.263 0 .527.107.714.321.186.214.279.515.279.857 0 .342-.093.643-.279.857a1.023 1.023 0 0 1-.714.321c-.263 0-.527-.107-.714-.321a1.023 1.023 0 0 1-.279-.857c0-.342.093-.643.279-.857.187-.214.451-.321.714-.321z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Next.js
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A React framework for production with server-side rendering, static site generation, and API routes built-in. 
              Next.js provides an excellent developer experience with zero configuration.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                             <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">SSR</span>
               <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">SSG</span>
               <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">API Routes</span>
               <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">File-based Routing</span>
               <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">Zero Config</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                         {/* Server-Side Rendering */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-500/30 transition-colors">
                   <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Server-Side Rendering</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Next.js enables server-side rendering of React components, improving performance, SEO, and user experience 
                  by pre-rendering pages on the server.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-white text-sm">
                    {`// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: { data }
  };
}

export default function Home({ data }) {
  return <div>{data.title}</div>;
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* Static Site Generation */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-500/30 transition-colors">
                   <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Static Site Generation</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Generate static HTML at build time for optimal performance. Pages are pre-rendered and can be served 
                  from a CDN for lightning-fast loading.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-white text-sm">
                    {`// pages/blog/[slug].js
export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return { props: { post } };
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* API Routes */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-500/30 transition-colors">
                   <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">API Routes</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Create API endpoints as Node.js serverless functions within your Next.js application. 
                  No need for a separate backend server.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-white text-sm">
                    {`// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    // Create user logic
    res.status(201).json({ message: 'User created' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(\`Method \${req.method} Not Allowed\`);
  }
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* File-based Routing */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-500/30 transition-colors">
                   <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">File-based Routing</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Create routes by adding files to the pages directory. Next.js automatically creates routes 
                  based on your file structure, making routing intuitive and simple.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-white text-sm">
                    {`// File structure creates routes:
// pages/index.js → /
// pages/about.js → /about
// pages/blog/[slug].js → /blog/:slug
// pages/api/users.js → /api/users

// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}

// Automatically accessible at /about`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose Next.js?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimal Performance</h3>
                <p className="text-white/70">Automatic code splitting, server-side rendering, and static generation ensure fast loading times and excellent user experience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Zero Configuration</h3>
                <p className="text-white/70">Get started immediately with sensible defaults. No complex configuration needed for routing, bundling, or optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Full-stack Framework</h3>
                <p className="text-white/70">Build both frontend and backend in one framework with API routes, database integration, and deployment optimization.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
                     <div className="bg-gradient-to-r from-gray-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with Next.js</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-white text-sm">
                    {`# Create new Next.js app
npx create-next-app@latest my-next-app
cd my-next-app

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Next.js provides a seamless development experience with hot reloading, automatic optimization, 
                  and production-ready builds out of the box.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Learn file-based routing and page structure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Understand data fetching with getStaticProps and getServerSideProps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Master API routes for backend functionality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Explore dynamic routing and nested layouts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Learn deployment and optimization strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
                         <div className="bg-gradient-to-r from-gray-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Next.js?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your Next.js journey today and build production-ready React applications with the most powerful React framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <a 
                   href="https://nextjs.org"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                 >
                  Official Documentation
                </a>
                <Link 
                  href="/"
                  prefetch={true}
                  className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Explore Other Frameworks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
