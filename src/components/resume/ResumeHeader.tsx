
import { Mail, MapPin, Phone, Linkedin, Calendar } from 'lucide-react';

const ResumeHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-600">
          <img 
            src="/logos/lazar.jpeg" 
            alt="Professional headshot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Lazar Trifunovic
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Solutions Architect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} className="text-blue-500" />
              <a href="mailto:lztrifunovic@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                lztrifunovic@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} className="text-blue-500" />
              <a href="tel:+13367491713" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                (336) 749-1713
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} className="text-blue-500" />
              <span>Charlotte, NC</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Linkedin size={18} className="text-blue-500" />
              <a 
                href="https://linkedin.com/in/lazar-stojanovski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Experienced Solutions Architect with a proven track record of driving customer success 
            and delivering innovative technical solutions. Passionate about bridging the gap between 
            complex technology and business outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
