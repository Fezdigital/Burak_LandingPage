import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function ExpressPage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="Node.js Framework"
        title1="Express"
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
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Frameworks
            </Link>
          </div>

          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
                         <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 8.182l-.828-.002a15.384 15.384 0 00-.564-.015 12.434 12.434 0 00-4.265.754c-.705-.33-1.452-.602-2.233-.804a13.876 13.876 0 00-4.893-.361c-1.564.022-3.124.25-4.487.77-1.38-.516-2.943-.754-4.504-.776-2.053-.023-4.211.391-5.84 1.128a14.9 14.9 0 00-2.58 1.857A14.432 14.432 0 000 12.867c0 3.559 2.647 6.903 6.269 7.547 2.466.443 4.726-.195 6.58-1.486 1.844 1.28 4.01 1.91 6.466 1.486C23.353 19.77 24 16.426 24 12.867c0-.256-.005-.508-.015-.76.005-.018.01-.037.015-.055V8.182zM8.269 20.123c-1.698.469-3.22-.302-4.734-1.485-1.514-1.184-2.852-2.754-2.415-4.46.469-1.698 2.002-2.53 3.699-2.999 1.698-.469 3.22.302 4.734 1.485 1.514 1.184 2.852 2.754 2.415 4.46-.469 1.698-2.002 2.53-3.699 2.999zm7.462 0c-1.698.469-3.22-.302-4.734-1.485-1.514-1.184-2.852-2.754-2.415-4.46.469-1.698 2.002-2.53 3.699-2.999 1.698-.469 3.22.302 4.734 1.485 1.514 1.184 2.852 2.754 2.415 4.46-.469 1.698-2.002 2.53-3.699 2.999z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Express
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A minimal and flexible Node.js web application framework that provides a robust set of features 
              for web and mobile applications. Express simplifies the process of building APIs and web servers.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                             <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Minimal</span>
               <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Flexible</span>
               <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Middleware</span>
               <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Routing</span>
               <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Fast</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                         {/* Minimal and Flexible */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Minimal and Flexible</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Express is designed to be minimal and unopinionated, giving developers the freedom to structure 
                  their applications as they see fit while providing essential web application features.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-yellow-300 text-sm">
                    {`// Minimal Express app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* Middleware System */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Middleware System</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Express has a powerful middleware system that allows you to add functionality to your application 
                  in a modular way, such as authentication, logging, and request parsing.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-yellow-300 text-sm">
                    {`// Middleware examples
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
  console.log('Request:', req.method, req.url);
  next();
});

// Authentication middleware
app.use('/api', authMiddleware);`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* Routing */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Powerful Routing</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Express provides a robust routing system that allows you to define endpoints for different HTTP methods 
                  and handle dynamic parameters with ease.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-yellow-300 text-sm">
                    {`// RESTful API routes
app.get('/api/users', getUsers);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);

// Route parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

                         {/* Template Engines */}
             <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
               <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                 <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Template Engines</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Express supports various template engines like EJS, Pug, and Handlebars, making it easy to 
                  render dynamic HTML pages and create full-stack applications.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-yellow-300 text-sm">
                    {`// Set template engine
app.set('view engine', 'ejs');

// Render views
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express App',
    users: ['John', 'Jane', 'Bob']
  });
});

// EJS template example
// <h1><%= title %></h1>
// <ul><% users.forEach(user => { %>
//   <li><%= user %></li>
// <% }); %></ul>`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose Express?</h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="text-center">
                 <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-white mb-3">Fast Development</h3>
                <p className="text-white/70">Minimal setup and intuitive API make it easy to get started and build applications quickly.</p>
              </div>
                             <div className="text-center">
                 <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-white mb-3">Flexible Architecture</h3>
                <p className="text-white/70">Unopinionated design allows you to structure your application according to your needs and preferences.</p>
              </div>
                             <div className="text-center">
                 <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-white mb-3">Large Ecosystem</h3>
                <p className="text-white/70">Extensive middleware ecosystem and community support provide solutions for almost any use case.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
                     <div className="bg-gradient-to-r from-yellow-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with Express</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-yellow-300 text-sm">
                    {`# Create new project
mkdir my-express-app
cd my-express-app
npm init -y

# Install Express
npm install express

# Create server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

# Run the app
node server.js`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Express is easy to set up and get started with. The minimal API makes it perfect for 
                  building APIs and web applications quickly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Learn Express routing and middleware concepts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Understand request/response handling and error management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Master template engines for server-side rendering
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Explore popular middleware like body-parser and cors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Learn database integration and authentication
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
                         <div className="bg-gradient-to-r from-yellow-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Express?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your Express journey today and build fast, scalable web applications with the most popular Node.js framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <a 
                   href="https://expressjs.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
