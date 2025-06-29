import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              Lazar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            An engineer with real-world experience maximizing the impact of AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-full font-medium text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Digital rain code background */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 font-mono text-xs text-gray-600 dark:text-gray-400 select-none"
              style={{
                left: `${5 + i * 4.5}%`,
                animation: `matrix-rain ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: 'translateY(-100%)'
              }}
            >
              <div className="space-y-1">
                {['const', 'async', 'await', 'function', 'class', 'import', 'export', 'return', 'try', 'catch', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'let', 'var', 'def', 'print', 'self', 'True', 'False', 'None', 'SELECT', 'FROM', 'WHERE', 'JOIN', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'TABLE', 'INDEX', '{', '}', '[', ']', '(', ')', ';', ':', ',', '.', '+', '-', '*', '/', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'x', 'y', 'z'].map((char, j) => (
                  <div 
                    key={j} 
                    style={{
                      opacity: Math.random() > 0.7 ? 1 : Math.random() * 0.3,
                      fontSize: Math.random() > 0.8 ? '0.6rem' : '0.75rem'
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
