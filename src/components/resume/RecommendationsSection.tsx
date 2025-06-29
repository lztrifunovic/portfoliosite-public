
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface Recommendation {
  name: string;
  title: string;
  company: string;
  image: string;
  text: string;
  linkedinUrl: string;
}

const RecommendationsSection = () => {
  const [expandedRecs, setExpandedRecs] = useState<{[key: number]: boolean}>({});

  const toggleExpanded = (index: number) => {
    setExpandedRecs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const recommendations: Recommendation[] = [
    {
      name: "Travis Taylor",
      title: "VP of Customer Experience",
      company: "DarwinAI",
      image: "/logos/travis.jpeg",
      text: "I had the pleasure of working with Lazar while he was on my team as a Field Application Engineer. His responsibilities on the team included working directly with our customers to install and support their vision inspection systems. This was a challenging role in that many areas of expertise were needed on the mechanical and software engineering sides. Lazar could be counted on to work independently in challenging circumstances while onsite with our customers. This would include the installation of the vision system hardware, software, QA and post installation support.\n\nIn our business we worked with customers in North America, Europe and Australia. Lazar was able to span across all of our customers to provide guidance and support. I was able to fully count on him to lead communication with customers and ensure their needs were met. He is a quick learner and was able to transition between different vision system applications and industries. For our team Lazar was tasked to work on our Identiflight and Federal Reserve products. One thing that really stands out to me about Lazar is his ability to learn highly technical concepts and products, then having the ability to take that knowledge and relate it to a customer.\n\nOverall I enjoyed my time working with Lazar. He is a highly capable team player who is always willing to jump into tough problems and help customers maximize their use of the product.",
      linkedinUrl: "https://www.linkedin.com/in/travisstaylor/"
    },
    {
      name: "Aaron Coppage",
      title: "Director of Production and Installation",
      company: "Boulder Imaging",
      image: "/logos/aaron.jpeg",
      text: "Lazar was a great team member and was instrumental to the team and product growth. His range of skills and aptitude at learning new subjects facilitated a great match to the dynamic demands of his role at Boulder Imaging. The collation of technical, non-technical and customer/user focus ensure the successful experience for our customers. Lazar's jovial personality balanced well with his focused hard-working nature are pillars that make him a great asset for any team he joins.",
      linkedinUrl: "https://www.linkedin.com/in/acoppage/"
    },
    {
      name: "Matthew Hibbets",
      title: "Senior Wireless Telecommunications Engineer",
      company: "American Electric Power",
      image: "/logos/matthew.jpeg",
      text: "Lazar and I worked at Boulder Imaging as fellow Field Application Engineers. From day one Lazar was able to contribute to the team and continued to do so during his entire tenure at Boulder Imaging. For a period of time, we shared the same office. His positive attitude and outlook were contagious which made him easy and enjoyable to work with.\n\nLazar's exceptional customer relation skills proved invaluable in the daily interactions with customers. He was extremely good at customer communications and proved, on many occasions, an aptitude for managing customer expectations. I can think of several instances where he was able to turn an initially negative conversation into a positive conversation by actively listening to the customer and providing technical explanations and reasoning to address the customer's concerns. Lazar could always provide the customer with a path forward, de-escalating situations as needed.\n\nWe were also constantly working on multiple projects at once. This required strong customer management skills from each member of the team. Lazar has a proven track record for increasing customer satisfaction by exceeding the customers' support expectations.\n\nI always enjoyed working with Lazar and never thought twice about whether or not he would be able to take care of customers' concerns.",
      linkedinUrl: "https://www.linkedin.com/in/matthew-hibbets/"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Recommendations</h3>
      
      <div className="space-y-8">
        {recommendations.map((rec, index) => (
          <div key={index} className="border-2 border-purple-200 dark:border-purple-700 rounded-lg p-6 bg-purple-50 dark:bg-purple-900/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img src={rec.image} alt={rec.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{rec.name}</h4>
                  <a 
                    href={rec.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    title="View LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{rec.title} @ {rec.company}</p>
              </div>
            </div>
            
            <div className="space-y-6 ml-4">
              <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-6 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-r-lg py-2">
                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  {(() => {
                    const paragraphs = rec.text.split('\n\n');
                    const isCollapsible = paragraphs.length > 1 && (rec.name === 'Travis Taylor' || rec.name === 'Matthew Hibbets');
                    const isExpanded = expandedRecs[index];
                    const showParagraphs = isCollapsible && !isExpanded ? [paragraphs[0]] : paragraphs;
                    
                    return (
                      <>
                        "{showParagraphs.map((paragraph, pIndex, array) => (
                          <span key={pIndex} className={pIndex > 0 ? 'block mt-4' : 'inline'}>
                            {paragraph}
                            {!isCollapsible && pIndex === array.length - 1 ? '"' : ''}
                            {isCollapsible && isExpanded && pIndex === array.length - 1 ? '"' : ''}
                            {isCollapsible && !isExpanded && pIndex === array.length - 1 ? '"' : ''}
                          </span>
                        ))}
                        {isCollapsible && (
                          <div className="mt-4">
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp size={16} />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown size={16} />
                                  Read More
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
