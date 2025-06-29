
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600">
                  <img 
                    src="/logos/lazar.jpeg" 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Solutions Architect with over half a decade of experience in customer success 
                    and technical implementation. I love solving complex problems and helping businesses 
                    achieve their goals through innovative technology solutions.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">My Journey</h2>
                  <p className="leading-relaxed">
                    My career began in field application engineering, where I developed expertise in 
                    machine learning, computer vision, and high-precision optics. This foundation led me 
                    to customer success engineering, where I discovered my passion for bridging technical 
                    complexity with business value.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">What Drives Me</h2>
                  <p className="leading-relaxed">
                    I'm energized by the challenge of translating complex technical requirements into 
                    actionable solutions that drive real business outcomes. Whether it's expanding market 
                    reach through strategic partnerships or reducing customer churn through proactive 
                    engagement, I thrive on making technology work for people.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Beyond Work</h2>
                  <p className="leading-relaxed">
                    When I'm not architecting solutions or optimizing customer experiences, you'll find me 
                    cooking up an excellent meal, traveling the world, or enjoying the great outdoors.
                  </p>
                </div>

              </div>
            </div>

            {/* Professional Accomplishments - Cover Letter Style Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-8 md:p-12 mt-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Accomplishments</h2>
                
                <div className="space-y-8 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="text-lg leading-relaxed">
                      At Boulder Imaging, I spearheaded the international expansion of IdentiFlight, bringing cutting-edge wildlife protection technology to global markets. Recognizing that scaling beyond domestic borders required more than just product deployment, I helped implement a comprehensive global technician training program that established standardized certification processes across multiple continents. This initiative involved building a scalable support infrastructure that could maintain our 99% species detection accuracy across diverse environmental conditions. The program successfully onboarded international technicians across Europe, North America, and Australia, directly enabling IdentiFlight's deployment at more than 150 wind farms worldwide and establishing Boulder Imaging as the global leader in avian protection systems.
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed">
                      My technical leadership culminated in orchestrating one of the most complex multi-organization collaborations in financial technology when I led the implementation efforts between three cutting-edge companies to develop the next-generation CDI2 sensor and cash processing machine for the Federal Reserve. This project required unprecedented coordination between hardware manufacturers and software developers to create the first CDI2-compliant technology for central banking operations. Through careful project management and technical integration oversight, I ensured seamless interoperability between disparate systems while maintaining the stringent security and accuracy requirements of central banking. The successful deployment was not only accepted by the Federal Reserve but has since expanded to central banks across Europe, establishing a new standard for currency detection technology and opening a multi-million dollar market for advanced financial processing systems.
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed">
                      At Camio, I helped bring the product transformation from a real-time video search tool into a comprehensive visual intelligence platform to market, revolutionizing how businesses leverage computer vision technology. Recognizing the untapped potential beyond traditional security applications, I worked to quickly iterate and expand the agents' capabilities that extended Camio's reach into manufacturing quality control, automation workflows, business intelligence, and operational optimization. This transformation involved rapidly scoping new features to handle diverse visual recognition tasks, creating industry-specific analytics dashboards, and building flexible integrations that maximized return on investment for both the company and its customers. The result was a 400% expansion in addressable market opportunities and a 550% increase in inbound opportunities, with successful deployments spanning from manufacturing floor optimization to pharmaceutical sanitization compliance, fundamentally repositioning Camio as a leader in visual AI solutions and driving significant growth in enterprise adoption across multiple industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
