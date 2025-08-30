import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import { ContactForm } from "@/components/ui/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="JavaScript Frameworks"
        title1="Modern Web"
        title2="Development"
      />
      
      {/* Main Content Section */}
      <div className="relative bg-gradient-to-b from-[#030303] to-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Choose Your Framework
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the most powerful and popular JavaScript frameworks that are shaping the future of web development. 
              From frontend libraries to backend runtimes, these tools empower developers to build amazing applications.
            </p>
          </div>

          {/* Framework Cards - First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12">
            {/* React Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.53 0-3.124.613-4.24 1.796-.375.4-.72.85-1.03 1.33-.31-.48-.655-.93-1.03-1.33C9.476.923 7.883.31 6.353.31 3.14.31.5 2.95.5 6.163c0 2.5 1.72 4.61 4.03 5.23.46.12.93.18 1.42.18.49 0 .96-.06 1.42-.18 2.31-.62 4.03-2.73 4.03-5.23 0-3.213-2.64-5.853-5.85-5.853z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">React</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A JavaScript library for building user interfaces, particularly single-page applications with component-based architecture.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">Component-based</span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">Virtual DOM</span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">JSX</span>
                  </div>
                </div>
                <Link href="/react" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>

            {/* Vue.js Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 10.11l2.41-7.88h4.43L12 14.08z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Vue.js</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A progressive framework for building user interfaces with an intuitive API and excellent performance.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-500/30">Progressive</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-500/30">Reactive</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-500/30">Template-based</span>
                  </div>
                </div>
                <Link href="/vue" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-green-500 hover:text-green-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>

            {/* Angular Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 8.26L24 9.27l-6 5.46 1.18 6.92L12 22.77l-7.18-1.12L6 14.73 0 9.27l8.91-1.01L12 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Angular</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A platform for building mobile and desktop web applications using TypeScript/JavaScript and HTML.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 text-xs sm:text-sm rounded-full border border-red-500/30">TypeScript</span>
                    <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 text-xs sm:text-sm rounded-full border border-red-500/30">Dependency Injection</span>
                    <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 text-xs sm:text-sm rounded-full border border-red-500/30">CLI</span>
                  </div>
                </div>
                <Link href="/angular" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-red-500 hover:text-red-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>

            {/* Node.js Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-600/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-600/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.998 24c-.321 0-.641-.084-.922-.247L1.809 18.42c-.438-.245-.713-.724-.713-1.26V6.84c0-.536.275-1.015.713-1.26l9.267-5.333c.56-.308 1.284-.308 1.844 0l9.267 5.333c.438.245.713.724.713 1.26v10.32c0 .536-.275 1.015-.713 1.26l-9.267 5.333c-.28.163-.601.247-.922.247zM12 1.333L2.667 6.667v10.666L12 22.667l9.333-5.334V6.667L12 1.333z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Node.js</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A JavaScript runtime built on Chrome&apos;s V8 engine for building fast and scalable server-side applications.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">Event-driven</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">Non-blocking I/O</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">NPM</span>
                  </div>
                </div>
                <Link href="/nodejs" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-green-600 hover:text-green-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>
          </div>

          {/* Framework Cards - Second Row (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-20">
            {/* Empty space for centering on desktop */}
            <div className="hidden lg:block"></div>
            {/* Express Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gray-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 8.182l-.828-.002a15.384 15.384 0 00-.564-.015 12.434 12.434 0 00-4.265.754c-.705-.33-1.452-.602-2.233-.804a13.876 13.876 0 00-4.893-.361c-1.564.022-3.124.25-4.487.77-1.38-.516-2.943-.754-4.504-.776-2.053-.023-4.211.391-5.84 1.128a14.9 14.9 0 00-2.58 1.857A14.432 14.432 0 000 12.867c0 3.559 2.647 6.903 6.269 7.547 2.466.443 4.726-.195 6.58-1.486 1.844 1.28 4.01 1.91 6.466 1.486C23.353 19.77 24 16.426 24 12.867c0-.256-.005-.508-.015-.76.005-.018.01-.037.015-.055V8.182zM8.269 20.123c-1.698.469-3.22-.302-4.734-1.485-1.514-1.184-2.852-2.754-2.415-4.46.469-1.698 2.002-2.53 3.699-2.999 1.698-.469 3.22.302 4.734 1.485 1.514 1.184 2.852 2.754 2.415 4.46-.469 1.698-2.002 2.53-3.699 2.999zm7.462 0c-1.698.469-3.22-.302-4.734-1.485-1.514-1.184-2.852-2.754-2.415-4.46.469-1.698 2.002-2.53 3.699-2.999 1.698-.469 3.22.302 4.734 1.485 1.514 1.184 2.852 2.754 2.415 4.46-.469 1.698-2.002 2.53-3.699 2.999z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Express</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-yellow-300 text-xs sm:text-sm rounded-full border border-yellow-500/30">Minimal</span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-yellow-300 text-xs sm:text-sm rounded-full border border-yellow-500/30">Flexible</span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-yellow-300 text-xs sm:text-sm rounded-full border border-yellow-500/30">Middleware</span>
                  </div>
                </div>
                <Link href="/express" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-yellow-500 hover:text-yellow-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>

            {/* Next.js Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gray-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 4.317 8.296 8.918 9.695.779.234 1.62.422 2.748.528.368.034 1.935.034 2.304 0 1.128-.106 1.969-.294 2.748-.528 4.601-1.399 8.266-5.189 8.918-9.695.096-.659.108-.854.108-1.748s-.012-1.089-.108-1.747c-.652-4.506-4.317-8.296-8.918-9.695a19.299 19.299 0 0 0-2.748-.528A19.76 19.76 0 0 0 11.572 0zm5.069 7.217c.263 0 .527.107.714.321.186.214.279.515.279.857 0 .342-.093.643-.279.857a1.023 1.023 0 0 1-.714.321c-.263 0-.527-.107-.714-.321a1.023 1.023 0 0 1-.279-.857c0-.342.093-.643.279-.857.187-.214.451-.321.714-.321zm-10.138 0c.263 0 .527.107.714.321.186.214.279.515.279.857 0 .342-.093.643-.279.857a1.023 1.023 0 0 1-.714.321c-.263 0-.527-.107-.714-.321a1.023 1.023 0 0 1-.279-.857c0-.342.093-.643.279-.857.187-.214.451-.321.714-.321z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Next.js</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    A React framework for production with server-side rendering, static site generation, and API routes built-in.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-500/30">Server-Side Rendering</span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-500/30">Static Site Generation</span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-500/30">API Routes</span>
                  </div>
                </div>
                <Link href="/nextjs" prefetch={true} className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-gray-500 hover:text-gray-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base inline-block">
                  Learn More
                </Link>
                <Meteors number={8} />
              </div>
            </div>
            {/* Empty space for centering on desktop */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Features Section */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12">Why Choose JavaScript Frameworks?</h2>
            <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* High Performance Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">High Performance</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      Modern JavaScript frameworks are engineered for exceptional performance with optimized rendering algorithms, efficient virtual DOM implementations, and intelligent state management systems. They feature advanced techniques like tree shaking, code splitting, and lazy loading to minimize bundle sizes while maximizing runtime efficiency. These frameworks also provide built-in optimizations such as component memoization, automatic batching of updates, and server-side rendering capabilities that ensure your applications load faster and run smoother across all devices.
                    </p>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>

              {/* Developer Experience Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">Developer Experience</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      JavaScript frameworks prioritize developer productivity with sophisticated tooling ecosystems that include hot module replacement, advanced debugging capabilities, and intelligent code completion. They offer comprehensive CLI tools for scaffolding, testing, and deployment, along with extensive TypeScript support for enhanced code quality. The development experience is further enhanced by rich browser extensions, detailed error messages, excellent documentation with interactive examples, and seamless integration with popular IDEs and development workflows.
                    </p>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>

              {/* Large Community Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">Large Community</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      JavaScript frameworks benefit from thriving global communities with millions of active developers contributing to extensive ecosystems of libraries, plugins, and tools. These communities provide invaluable resources including comprehensive tutorials, video courses, interactive learning platforms, and real-world project examples. You&apos;ll find active support through forums, Discord servers, Stack Overflow, and GitHub discussions, along with regular conferences, meetups, and workshops that foster knowledge sharing and professional networking opportunities.
                    </p>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-20 sm:mt-32">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
