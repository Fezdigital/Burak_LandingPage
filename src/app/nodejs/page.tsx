import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function NodeJSPage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="JavaScript Runtime"
        title1="Node.js"
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
                <path d="M11.998 24c-.321 0-.641-.084-.922-.247L1.809 18.42c-.438-.245-.713-.724-.713-1.26V6.84c0-.536.275-1.015.713-1.26l9.267-5.333c.56-.308 1.284-.308 1.844 0l9.267 5.333c.438.245.713.724.713 1.26v10.32c0 .536-.275 1.015-.713 1.26l-9.267 5.333c-.28.163-.601.247-.922.247zM12 1.333L2.667 6.667v10.666L12 22.667l9.333-5.334V6.667L12 1.333z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Node.js
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A JavaScript runtime built on Chrome&apos;s V8 engine for building fast and scalable server-side applications. 
              Node.js enables JavaScript to run outside the browser, making it a powerful tool for backend development.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Event-driven</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Non-blocking I/O</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">NPM</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Cross-platform</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Scalable</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Event-Driven Architecture */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Event-Driven Architecture</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, 
                  perfect for data-intensive real-time applications that run across distributed devices.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`// Event-driven server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Non-blocking I/O */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Non-blocking I/O</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Node.js uses asynchronous, non-blocking I/O operations that allow it to handle multiple 
                  concurrent connections efficiently without creating separate threads for each request.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`// Asynchronous file reading
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

console.log('Reading file...');`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* NPM Ecosystem */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">NPM Ecosystem</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Node.js comes with npm (Node Package Manager), the world&apos;s largest software registry, 
                  providing access to millions of reusable packages and tools.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`# Install packages
npm install express mongoose

# Initialize project
npm init -y

# Run scripts
npm start
npm run dev

# Package.json example
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Cross-Platform */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Cross-Platform</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Node.js runs on Windows, macOS, Linux, and other platforms, making it easy to develop 
                  and deploy applications across different operating systems and environments.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-green-300 text-sm">
                    {`// Platform detection
const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Node.js version:', process.version);

// Works on Windows, macOS, Linux
const path = require('path');
const filePath = path.join(__dirname, 'data', 'file.txt');`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose Node.js?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
                <p className="text-white/70">Event-driven architecture and non-blocking I/O enable high throughput and low latency for real-time applications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Development</h3>
                <p className="text-white/70">JavaScript on both frontend and backend, extensive npm ecosystem, and excellent tooling accelerate development.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Large Community</h3>
                <p className="text-white/70">Vibrant community with extensive documentation, tutorials, and support for building any type of application.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with Node.js</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-green-300 text-sm">
                    {`# Download and install Node.js
# Visit https://nodejs.org

# Check installation
node --version
npm --version

# Create your first app
mkdir my-node-app
cd my-node-app
npm init -y

# Create server.js
echo "console.log('Hello Node.js!')" > server.js

# Run the app
node server.js`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Node.js is easy to install and get started with. The npm ecosystem provides everything 
                  you need to build powerful server-side applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Learn JavaScript fundamentals and ES6+ features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Understand asynchronous programming and callbacks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Master Promises, async/await, and error handling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Explore Express.js for building web applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Learn database integration and API development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Node.js?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your Node.js journey today and build fast, scalable server-side applications with the most popular JavaScript runtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://nodejs.org"
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
