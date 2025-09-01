"use client";

import { Meteors } from "@/components/ui/meteors";
import { ContactForm } from "@/components/ui/contact-form";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Link from "next/link";
import { useState } from "react";

export default function DatabasePage() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  return (
    <div className="relative bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      {/* Shooting Stars Background - Fixed Full Viewport */}
      <div className="fixed inset-0 overflow-hidden">
        <ShootingStars
          starColor="#8b5cf6"
          trailColor="#a78bfa"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#7c3aed"
          trailColor="#c4b5fd"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#8b5cf6"
          trailColor="#a78bfa"
          minSpeed={17}
          maxSpeed={37}
          minDelay={1300}
          maxDelay={3300}
        />
        <ShootingStars
          starColor="#7c3aed"
          trailColor="#c4b5fd"
          minSpeed={14}
          maxSpeed={32}
          minDelay={2400}
          maxDelay={4400}
        />
      </div>
      
      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 text-sm font-medium rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Database Management
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Designing, optimizing, and managing robust database systems with focus on performance, security, and scalability.
            </p>
          </div>

          {/* Experience & Background Section */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              Experience & Background
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              {/* Experience Timeline */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 relative z-50">My Database Journey</h3>
                  <div className="space-y-6 relative z-50">
                    <div className="border-l-2 border-purple-500/30 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-purple-300 text-sm font-medium"></span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Application Developer (With Database Experience)</h4>
                      <p className="text-white/70 text-sm">
                        I have experience designing and implementing database systems for both web and mobile applications. In my web projects, I have worked with MySQL and PostgreSQL, and for both web and Android applications, I utilized Firestore Database for real-time data synchronization. Additionally, I have integrated Room Database in Android applications, leveraging its abstraction layer to efficiently work with SQLite databases. Apart from these, I have also practiced SQL queries using the Northwind database in Microsoft SQL Server.
                      </p>
                    </div>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 relative z-50">Technical Expertise</h3>
                  <div className="space-y-6 relative z-50">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Database Systems</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">PostgreSQL</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">MySQL</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Microsoft SQL Server</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Room Database</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Firestore Database</span>
                      </div>
                    </div>
                  </div>
                  <Meteors number={8} />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section - Placeholder */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Projects
            </h2>
            
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-8 sm:p-12 text-center overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-50">
                  Projects Coming Soon
                </h3>
                <p className="text-white/70 text-lg relative z-50 max-w-2xl mx-auto">
                  This section will showcase my database projects. Projects will be dynamically loaded from the database.
                </p>
                <Meteors number={12} />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-50">
                  Need Database Solutions?
                </h3>
                <p className="text-white/70 mb-6 relative z-50">
                  Let's discuss your database requirements and create efficient, scalable data solutions.
                </p>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="inline-block px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative z-50"
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
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
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