import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function ReactPage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="JavaScript Library"
        title1="React"
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
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Frameworks
            </Link>
          </div>

          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.53 0-3.124.613-4.24 1.796-.375.4-.72.85-1.03 1.33-.31-.48-.655-.93-1.03-1.33C9.476.923 7.883.31 6.353.31 3.14.31.5 2.95.5 6.163c0 2.5 1.72 4.61 4.03 5.23.46.12.93.18 1.42.18.49 0 .96-.06 1.42-.18 2.31-.62 4.03-2.73 4.03-5.23 0-3.213-2.64-5.853-5.85-5.853z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              React
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A JavaScript library for building user interfaces, particularly single-page applications. 
              React makes it painless to create interactive UIs with declarative components.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Component-based</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Virtual DOM</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">JSX</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Declarative</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Unidirectional Data Flow</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Component-Based Architecture */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Component-Based Architecture</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  React components are self-contained, reusable pieces of UI that can be composed together to build complex interfaces. 
                  Each component manages its own state and can be easily tested and maintained.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-blue-300 text-sm">
                    {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Virtual DOM */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Virtual DOM</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  React uses a Virtual DOM to optimize rendering performance. Instead of directly manipulating the browser's DOM, 
                  React creates a lightweight copy and efficiently updates only the necessary parts.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-blue-300 text-sm">
                    {`// React efficiently updates only changed elements
const [count, setCount] = useState(0);
return <div>Count: {count}</div>;`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* JSX */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">JSX</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
                  It makes React components more readable and easier to understand.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-blue-300 text-sm">
                    {`// JSX combines JavaScript and HTML
const element = (
  <div className="greeting">
    <h1>Hello, World!</h1>
    <p>Welcome to React</p>
  </div>
);`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Hooks */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">React Hooks</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Hooks allow you to use state and other React features in functional components. 
                  They provide a more intuitive way to manage component logic and side effects.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-blue-300 text-sm">
                    {`// useState Hook
const [state, setState] = useState(initialValue);

// useEffect Hook
useEffect(() => {
  // Side effect logic
}, [dependencies]);`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose React?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
                <p className="text-white/70">Virtual DOM ensures efficient updates and optimal rendering performance for complex applications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Developer Experience</h3>
                <p className="text-white/70">Excellent tooling, debugging capabilities, and comprehensive documentation make development enjoyable.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Large Ecosystem</h3>
                <p className="text-white/70">Vast community with extensive libraries, tools, and resources for building any type of application.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with React</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-blue-300 text-sm">
                    {`npx create-react-app my-app
cd my-app
npm start`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Create React App is the easiest way to get started with React. It sets up a development environment with all the necessary tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Learn JSX syntax and component structure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Understand state and props management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Master React Hooks for functional components
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Explore routing with React Router
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Learn state management with Redux or Context API
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with React?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your React journey today and build powerful, interactive user interfaces with one of the most popular JavaScript libraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
