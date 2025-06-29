
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-200"
    },
    {
      title: "Backend", 
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-800 dark:text-green-200"
    },
    {
      title: "Tools & Platforms",
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Figma'],
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-800 dark:text-purple-200"
    },
    {
      title: "Soft Skills",
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management'],
      bgColor: "bg-gray-100 dark:bg-gray-700/50",
      textColor: "text-gray-800 dark:text-gray-200"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="hover:transform hover:scale-105 transition-all duration-200">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`px-3 py-1 ${category.bgColor} ${category.textColor} rounded-full text-sm hover:shadow-md transition-shadow duration-200`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
