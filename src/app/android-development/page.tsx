"use client";

import { Meteors } from "@/components/ui/meteors";
import { ContactForm } from "@/components/ui/contact-form";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ProjectsGrid } from "@/components/ui/projects-grid";
import { ProjectCategory } from "@/types/project";
import Link from "next/link";
import { useState } from "react";

export default function AndroidDevelopmentPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="relative bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      {/* Shooting Stars Background - Fixed Full Viewport */}
      <div className="fixed inset-0 overflow-hidden">
        <ShootingStars
          starColor="#10b981"
          trailColor="#34d399"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#059669"
          trailColor="#6ee7b7"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#10b981"
          trailColor="#34d399"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
        <ShootingStars
          starColor="#059669"
          trailColor="#6ee7b7"
          minSpeed={12}
          maxSpeed={28}
          minDelay={2500}
          maxDelay={4500}
        />
      </div>
      
      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-sm font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Android Development
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Building native Android applications with modern Kotlin, Jetpack Compose, and cutting-edge mobile development practices.
            </p>
          </div>

          {/* Experience & Background Section */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              Experience & Background
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              {/* Experience Timeline */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 relative z-50">My Android Development Journey</h3>
                  <div className="space-y-6 relative z-50">
                    <div className="border-l-2 border-emerald-500/30 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-emerald-300 text-sm font-medium"></span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Junior Android Developer</h4>
                      <p className="text-white/70 text-sm">
                        After taking a Mobile Computing course in college, I became interested in mobile app development. After experimenting with Flutter, Native Android was the one I found most interesting and appreciated. In my spare time, I developed Android projects with Kotlin, and I continue to do so.
                      </p>
                    </div>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>
              {/* Skills & Expertise */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 relative z-50">Technical Expertise</h3>
                  <div className="space-y-6 relative z-50">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Kotlin</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Jetpack Compose</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Android SDK</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Retrofit</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Room Database</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Architecture</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">MVVM</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Clean Architecture</span>
                      </div>
                    </div>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>
            </div>
          </div>

          {/* Android Development Approach */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              Development Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Modern UI */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-50">Modern UI/UX</h3>
                  <p className="text-white/70 text-sm relative z-50">
                    Creating beautiful, intuitive interfaces using Jetpack Compose and Material Design principles for exceptional user experiences.
                  </p>
                  <Meteors number={6} />
                </div>
              </div>

              {/* Performance */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-50">Performance First</h3>
                  <p className="text-white/70 text-sm relative z-50">
                    Optimizing app performance with efficient memory management, background processing, and smooth animations.
                  </p>
                  <Meteors number={6} />
                </div>
              </div>

              {/* Security */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 h-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-50">Secure & Reliable</h3>
                  <p className="text-white/70 text-sm relative z-50">
                    Implementing robust security measures, data encryption, and following Android security best practices.
                  </p>
                  <Meteors number={6} />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              Android Development Projects
            </h2>
            
            <ProjectsGrid 
              category={ProjectCategory.ANDROID_DEVELOPMENT}
              limit={6}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-50">
                  Need an Android App?
                </h3>
                <p className="text-white/70 mb-6 relative z-50">
                  Let&apos;s discuss your mobile app idea and create something amazing for Android users.
                </p>
                                 <button 
                   onClick={() => setShowContactForm(true)}
                   className="inline-block px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 font-medium rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 relative z-50"
                 >
                   Get In Touch
                 </button>
                <Meteors number={8} />
              </div>
            </div>
          </div>

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setShowContactForm(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 rounded-full flex items-center justify-center border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Contact Form */}
                <ContactForm hideDescription={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
