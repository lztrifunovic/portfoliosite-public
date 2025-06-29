import Navigation from '../components/Navigation';
import ResumeHeader from '../components/resume/ResumeHeader';
import CompanyExperience from '../components/resume/CompanyExperience';
import EducationSection from '../components/resume/EducationSection';
import SkillsSection from '../components/resume/SkillsSection';
import RecommendationsSection from '../components/resume/RecommendationsSection';
import DownloadButton from '../components/resume/DownloadButton';

const Resume = () => {
  const camioRoles = [
    {
      title: "Solutions Architect",
      period: "2024 - Present",
      borderColor: "border-blue-500",
      achievements: [
        "• Drove $3MM+ in renewals and expansions, significantly boosting ARR and NRR for key accounts by cultivating strategic partnerships with VP-level and C-level executives",
        "• Expanded total addressable market by leveraging Camio's API to enable seamless integration with partner platforms and deliver compelling POC and POV demonstrations in emerging markets",
        "• Accelerated growth by developing Camio's Certified Partnership program, empowering integrators with self-service resources to streamline training, deployment, and adoption of Camio's platform",
        "• Onboarded and empowered 100+ integrator partners, facilitating the deployment of over 500 new sites"
      ]
    },
    {
      title: "Senior Customer Success Engineer",
      period: "2023 - 2024", 
      borderColor: "border-blue-400",
      achievements: [
        "• Managed portfolio of 50+ accounts, achieving 99%+ customer retention rate and 150% net revenue retention",
        "• Led cross-functional initiatives to reduce customer churn by 25% through proactive engagement and technical support",
        "• Developed and executed customer success playbooks that improved onboarding time by 60%",
        "• Collaborated with product and engineering teams to prioritize feature requests against product roadmap"
      ]
    },
    {
      title: "Customer Success Engineer",
      period: "2022 - 2023",
      borderColor: "border-blue-300", 
      achievements: [
        "• Successfully onboarded 30+ new enterprise customers, ensuring smooth implementation and adoption",
        "• Reduced average time to respond by 95% and reduced average time to close by 65% by automating customer support workflows",
        "• Reduced integrator onboarding time by 45% through self-serve deployment and training resources"
      ]
    }
  ];

  const boulderRoles = [
    {
      title: "Field Application Engineer",
      period: "2019 - 2022",
      borderColor: "border-blue-500",
      achievements: [
        "• Developed, installed, and maintained a fleet of systems which utilized neural networks, machine learning, and high-precision optics to provide wildlife protection at wind farms internationally.",
        "• US Fish and Wildlife Report mentioning IdentiFlight",
        "• Developed, installed, and integrated machine vision technologies for currency systems under a Federal Reserve Bank contract to create the first CDI2-compliant banknote sorting machine and detector. Delivered on schedule, the project is now rolling out to all Federal Reserve cash processing sites and expanding to other Central Banks internationally.",
        "• Federal Reserve CDI2 Sensor Press Release",
        "• Led and trained a team of field application engineers and technicians, scaling operations from 40 to over 150 systems. Developed comprehensive training programs and automation tools to streamline workflows and improve efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <ResumeHeader />
            <DownloadButton />
            
            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h3>
              
              <div className="space-y-8">
                <CompanyExperience
                  companyName="Camio"
                  companyPeriod="Remote | 2022 - Present"
                  companyLogo="/logos/camio-logo.png"
                  roles={camioRoles}
                  linkedinUrl="https://www.linkedin.com/company/camiolog/"
                />

                <CompanyExperience
                  companyName="Boulder Imaging"
                  companyPeriod="Remote | 2019 - 2022"
                  companyLogo="/logos/boulder-imaging-logo.jpg"
                  roles={boulderRoles}
                  linkedinUrl="https://www.linkedin.com/company/boulder-imaging/"
                />
              </div>
            </div>

            <EducationSection />
            <RecommendationsSection />
            <SkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
