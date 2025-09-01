import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import { ContactForm } from "@/components/ui/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="Software Developer"
        title1="Burakcan"
        title2="Arısoy"
      />
      
      {/* Main Content Section */}
      <div className="relative bg-gradient-to-b from-[#030303] to-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Welcome to my personal website! I'm a passionate software developer with expertise in modern web and mobile technologies,
              creating innovative solutions and building exceptional digital experiences.
            </p>
          </div>

          {/* Skills Cards - First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 justify-items-center">
            {/* Web Development Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Web Development</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    Creating responsive and interactive user interfaces using modern frameworks and libraries like React and Next.js.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50 mb-4 sm:mb-6">
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">React</span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">Next.js</span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">TypeScript</span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30">JavaScript</span>
                  </div>
                                     <Link href="/web-development" className="block w-full">
                     <button className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 text-sm font-medium rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 relative z-50">
                       See More
                     </button>
                   </Link>
                </div>
                <Meteors number={12} />
              </div>
            </div>
            {/* Mobile Development Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-400/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Android Development</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    Creating user-friendly Native Android applications using Kotlin for Android platforms.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50 mb-4 sm:mb-6">
                    <span className="px-2 sm:px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs sm:text-sm rounded-full border border-emerald-500/30">Kotlin</span>
                    <span className="px-2 sm:px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs sm:text-sm rounded-full border border-emerald-500/30">Jetpack Compose</span>
                    <span className="px-2 sm:px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs sm:text-sm rounded-full border border-emerald-500/30">XML Layout</span>
                  </div>
                                     <Link href="/android-development" className="block w-full">
                     <button className="w-full px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-sm font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 relative z-50">
                       See More
                     </button>
                   </Link>
                </div>
                <Meteors number={12} />
              </div>
            </div>

            {/* Database Card */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">Database</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                    Designing and managing databases and ensuring optimal performance and security.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50 mb-4 sm:mb-6">
                    <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-500/30">MySQL</span>
                    <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-500/30">PostgreSQL</span>
                    <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-500/30">Microsoft SQL Server</span>
                  </div>
                                     <Link href="/database" className="block w-full">
                     <button className="w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 text-sm font-medium rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative z-50">
                       See More
                     </button>
                   </Link>
                </div>
                <Meteors number={12} />
              </div>
            </div>
          </div>

          {/* Personal Values Section */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12">What I Bring to the Table</h2>
            <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Innovation & Problem Solving Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">Innovation & Problem Solving</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      I approach every challenge with creativity and analytical thinking, transforming complex problems into elegant solutions. My passion for innovation drives me to explore new technologies and methodologies, ensuring that every project I work on benefits from cutting-edge approaches. I believe in writing clean, maintainable code that not only solves today's problems but scales for tomorrow's challenges.
                    </p>
                  </div>
                  <Meteors number={12} />
                </div>
              </div>

              {/* Continuous Learning Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">Continuous Learning</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      The tech industry evolves rapidly, and I stay ahead of the curve through continuous learning and professional development. I actively engage with the developer community, contribute to open-source projects, and regularly update my skills with the latest frameworks, tools, and best practices. This commitment to growth ensures that I can deliver modern, efficient solutions that leverage the best of what technology has to offer.
                    </p>
                  </div>
                  <Meteors number={12} />
                </div>
              </div>

              {/* Collaboration & Communication Card */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-50">Collaboration & Communication</h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed relative z-50">
                      Great software is built by great teams, and I excel in collaborative environments where ideas flow freely and everyone contributes their best work. I believe in clear communication, thorough documentation, and knowledge sharing. Whether working with designers, product managers, or fellow developers, I strive to create an environment where innovation thrives and every team member feels valued and empowered to contribute.
                    </p>
                  </div>
                  <Meteors number={12} />
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
