
import { Calendar } from 'lucide-react';

const EducationSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
      
      <div className="border-2 border-green-200 dark:border-green-700 rounded-lg p-6 bg-green-50 dark:bg-green-900/20 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img src="/logos/uncc-logo.png" alt="UNC Charlotte Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">University of North Carolina at Charlotte</h4>
            <p className="text-gray-600 dark:text-gray-300">Charlotte, NC</p>
          </div>
        </div>
        
        <div className="space-y-6 ml-4">
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-r-lg py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h5 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Mechanical Engineering</h5>
              <div className="flex items-center text-gray-600 dark:text-gray-300 gap-2">
                <Calendar size={16} />
                <span>2015 - 2019</span>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-1 mt-3">
              <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">• Levine Scholar, Class of 2019</p>
              <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">• Chancellor's Executive Sustainability Committee, (Only Student) Committee Member</p>
              <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">• Charlotte Green Initiative, Chair and President</p>
              <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">• Charlotte Dance Marathon, Entertainment Committee</p>
              <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">• Delta Sigma Phi, Founding Father</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
