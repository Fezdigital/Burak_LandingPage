import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function AngularPage() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <HeroGeometric 
        badge="JavaScript Framework"
        title1="Angular"
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
              className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Frameworks
            </Link>
          </div>

          {/* Introduction Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l3.09 8.26L24 9.27l-6 5.46 1.18 6.92L12 22.77l-7.18-1.12L6 14.73 0 9.27l8.91-1.01L12 0z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Angular
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              A platform for building mobile and desktop web applications using TypeScript/JavaScript and HTML. 
              Angular provides a complete solution for building scalable, enterprise-grade applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">TypeScript</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">Dependency Injection</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">CLI</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">Component-based</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">Enterprise-ready</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* TypeScript Integration */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">TypeScript Integration</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Angular is built with TypeScript from the ground up, providing enhanced tooling, better IDE support, 
                  and compile-time error checking for more robust applications.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-red-300 text-sm">
                    {`// TypeScript provides type safety
interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user',
  template: '<h1>{{ user.name }}</h1>'
})
export class UserComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Dependency Injection */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Dependency Injection</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Angular's powerful dependency injection system makes it easy to manage dependencies, 
                  create testable code, and build modular, maintainable applications.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-red-300 text-sm">
                    {`// Dependency injection example
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}

constructor(private userService: UserService) {}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Angular CLI */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Angular CLI</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  The Angular CLI provides powerful command-line tools for creating, building, testing, 
                  and deploying Angular applications with best practices built-in.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-red-300 text-sm">
                    {`# Create new Angular project
ng new my-angular-app

# Generate components, services, etc.
ng generate component user-list
ng generate service user

# Build and serve
ng serve
ng build --prod`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>

            {/* Component Architecture */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-[0.80] rounded-2xl blur-3xl" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 lg:p-8 h-full overflow-hidden rounded-2xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-50">Component Architecture</h3>
                <p className="text-white/70 leading-relaxed relative z-50 mb-4">
                  Angular's component-based architecture provides a structured way to build applications 
                  with reusable, self-contained components that encapsulate logic and presentation.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 relative z-50">
                  <code className="text-red-300 text-sm">
                    {`@Component({
  selector: 'app-user-card',
  template: \`
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: User;
}`}
                  </code>
                </div>
                <Meteors number={6} />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Why Choose Angular?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Ready</h3>
                <p className="text-white/70">Built for large-scale applications with comprehensive tooling, testing frameworks, and enterprise-grade features.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Tooling</h3>
                <p className="text-white/70">Powerful CLI, excellent IDE support, debugging tools, and comprehensive testing utilities out of the box.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strong Ecosystem</h3>
                <p className="text-white/70">Rich ecosystem with official libraries, community packages, and extensive documentation for enterprise development.</p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started with Angular</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-red-300 text-sm">
                    {`# Install Angular CLI
npm install -g @angular/cli

# Create new project
ng new my-angular-app

# Navigate and serve
cd my-angular-app
ng serve`}
                  </code>
                </div>
                <p className="text-white/70 mb-4">
                  Angular CLI provides a complete development environment with built-in best practices, 
                  testing setup, and production build optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Learn TypeScript fundamentals and Angular syntax
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Understand components, modules, and services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Master dependency injection and RxJS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Explore Angular Router for navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Learn state management with NgRx
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Angular?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start your Angular journey today and build scalable, enterprise-grade applications with one of the most powerful JavaScript frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://angular.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
