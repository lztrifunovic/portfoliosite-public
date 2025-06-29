
import { Calendar, ExternalLink, Linkedin } from 'lucide-react';

interface Role {
  title: string;
  period: string;
  achievements: string[];
  borderColor: string;
}

interface CompanyExperienceProps {
  companyName: string;
  companyPeriod: string;
  companyLogo: string;
  roles: Role[];
  linkedinUrl?: string;
}

const CompanyExperience = ({ companyName, companyPeriod, companyLogo, roles, linkedinUrl }: CompanyExperienceProps) => {
  const renderAchievementWithLinks = (achievement: string) => {
    // Check for US Fish and Wildlife Report
    if (achievement.includes('US Fish and Wildlife Report mentioning IdentiFlight')) {
      return (
        <div>
          <a 
            href="https://www.fws.gov/sites/default/files/documents/MWI_II_DraftEA_0.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            US Fish and Wildlife Report mentioning IdentiFlight
            <ExternalLink size={14} />
          </a>
        </div>
      );
    }
    
    // Check for Federal Reserve CDI2 Sensor Press Release
    if (achievement.includes('Federal Reserve CDI2 Sensor Press Release')) {
      return (
        <div>
          <a 
            href="https://www.globenewswire.com/news-release/2025/02/12/3024773/0/en/Boulder-Imaging-Powers-First-CDI2-Compliant-Technology-for-Central-Banks.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Federal Reserve CDI2 Sensor Press Release
            <ExternalLink size={14} />
          </a>
        </div>
      );
    }
    
    return <span>{achievement}</span>;
  };

  return (
    <div className="border-2 border-blue-200 dark:border-blue-700 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img src={companyLogo} alt={`${companyName} Logo`} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{companyName}</h4>
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                title="View LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300">{companyPeriod}</p>
        </div>
      </div>
      
      <div className="space-y-6 ml-4">
        {roles.map((role, index) => (
          <div key={index} className={`border-l-4 ${role.borderColor} dark:${role.borderColor.replace('blue-', 'blue-')} pl-6 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-r-lg py-2`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{role.title}</h5>
              <div className="flex items-center text-gray-600 dark:text-gray-300 gap-2">
                <Calendar size={16} />
                <span>{role.period}</span>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-2 mt-3">
              {role.achievements.map((achievement, achievementIndex) => {
                // Check if this is a special link achievement
                const isSpecialLink = achievement.includes('US Fish and Wildlife Report mentioning IdentiFlight') || 
                                     achievement.includes('Federal Reserve CDI2 Sensor Press Release');
                
                if (isSpecialLink) {
                  return (
                    <div key={achievementIndex} className="text-center" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                      {renderAchievementWithLinks(achievement)}
                    </div>
                  );
                }
                
                return (
                  <div key={achievementIndex} className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-150">
                    {renderAchievementWithLinks(achievement)}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyExperience;
