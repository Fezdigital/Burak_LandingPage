import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function VuePage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="JavaScript Framework"
        title1="Vue.js"
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
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Frameworks
            </Link>
          </div>

          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 10.11l2.41-7.88h4.43L12 14.08z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Vue.js
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A progressive framework for building user interfaces with an intuitive API and excellent performance. 
              Vue.js is designed to be incrementally adoptable and focuses on the view layer.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Progressive</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Reactive</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Template-based</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Component-based</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Easy to Learn</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Progressive Framework */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Progressive Framework</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Vue.js is designed to be incrementally adoptable. You can start with a simple script tag and gradually 
                  adopt more features as your application grows, without having to rewrite everything.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`<!-- Start with a simple script -->
<script src="https://unpkg.com/vue@3"></script>

<!-- Gradually adopt more features -->
<script type="module">
  import { createApp } from 'vue'
</script>`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Reactive Data Binding */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Reactive Data Binding</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Vue's reactivity system automatically tracks dependencies and updates the DOM when data changes. 
                  This makes it easy to build dynamic, responsive user interfaces.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`// Data automatically updates the template
data() {
  return {
    message: 'Hello Vue!'
  }
}

// Template automatically reflects changes
<h1>{{ message }}</h1>`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Template Syntax */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Template Syntax</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM 
                  to the underlying component instance's data.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`<!-- Vue template syntax -->
<div id="app">
  <p v-if="seen">Now you see me</p>
  <button v-on:click="reverseMessage">
    {{ message }}
  </button>
</div>`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Composition API */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Composition API</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  The Composition API provides a more flexible way to organize component logic using imported functions 
                  instead of declaring options.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`// Composition API
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    onMounted(() => {
      console.log('Component mounted')
    })
    
    return { count }
  }
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose Vue.js?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy to Learn</h3>
                <p className="text-white/70">Gentle learning curve with familiar HTML, CSS, and JavaScript syntax makes Vue.js accessible to developers of all levels.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellent Performance</h3>
                <p className="text-white/70">Lightweight framework with optimized rendering and efficient reactivity system for fast, responsive applications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Growing Ecosystem</h3>
                <p className="text-white/70">Rich ecosystem with official libraries, community packages, and comprehensive tooling for full-stack development.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with Vue.js</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-green-300 text-sm">
                    {`npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm run dev`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Vue CLI provides a full development setup with hot reload, lint-on-save, and production builds out of the box.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Learn Vue template syntax and directives
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Understand reactive data and computed properties
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Master component composition and props
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Explore Vue Router for single-page applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Learn state management with Pinia or Vuex
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Vue.js?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your Vue.js journey today and build elegant, performant user interfaces with one of the most approachable JavaScript frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://vuejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
