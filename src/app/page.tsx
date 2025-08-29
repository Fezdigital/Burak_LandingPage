import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";

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

          {/* Framework Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-20">
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
                <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                  Learn More
                </button>
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
                <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-green-500 hover:text-green-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                  Learn More
                </button>
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
                <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-red-500 hover:text-red-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                  Learn More
                </button>
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
                    A JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50">
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">Event-driven</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">Non-blocking I/O</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-600/30">NPM</span>
                  </div>
                </div>
                <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-green-600 hover:text-green-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                  Learn More
                </button>
                <Meteors number={8} />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12">Why Choose JavaScript Frameworks?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* High Performance Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 relative z-50">High Performance</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed relative z-50">Optimized rendering and efficient state management for lightning-fast applications with minimal bundle sizes.</p>
                  </div>
                  <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                    Learn More
                  </button>
                  <Meteors number={6} />
                </div>
              </div>

              {/* Developer Experience Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-green-500/30 transition-colors">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 relative z-50">Developer Experience</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed relative z-50">Excellent tooling, debugging capabilities, comprehensive documentation, and vibrant community support.</p>
                  </div>
                  <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-green-500 hover:text-green-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                    Learn More
                  </button>
                  <Meteors number={6} />
                </div>
              </div>

              {/* Large Community Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group sm:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-500/30 transition-colors">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 relative z-50">Large Community</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed relative z-50">Vibrant ecosystems with extensive libraries, plugins, tutorials, and active community support.</p>
                  </div>
                  <button className="border px-3 sm:px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors relative z-50 mt-4 sm:mt-6 text-sm sm:text-base">
                    Learn More
                  </button>
                  <Meteors number={6} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
                Choose the framework that best fits your project needs and start building amazing applications today. 
                Each framework offers unique advantages for different use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  Explore Frameworks
                </button>
                <button className="bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
