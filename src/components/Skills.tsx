import {
  Code2,
  Database,
  Wrench,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
} from 'lucide-react';

export default function Skills() {
  const coreTechSkills = {
    frontend: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Next.js',
      'React Query',
    ],
    backend: [
      'Node.js',
      'Java',
      'Spring',
      'Spring Boot',
      'REST APIs',
      'GraphQL',
      'WebSockets',
      'Microservices',
      "kafka",
      'Authentication & Authorization',
    ],
    databases: [
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Redis',
      'MySQL',
      'Elastic Search',
      'Database Design',
      'Query Optimization',
    ],
  };

  const tools = [
    'Git & GitHub',
    'Docker',
    'Postman',
    'VS Code',
    'Intellij IDEA',
    'Webpack',
    'Vite',
    'npm/yarn',
    'CI/CD (GitHub Actions)',
    'Vercel',
    'AWS',
    'Linux',
    'Figma',
    'Maven',
    'Kibana',
    'Jira',
  ];

  const softSkills = [
    {
      icon: <Target className="w-6 h-6" />,
      skill: 'Problem Solving',
      description: 'Analytical thinking and systematic debugging',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      skill: 'Communication',
      description: 'Clear technical documentation and collaboration',
    },
    {
      icon: <Users className="w-6 h-6" />,
      skill: 'Teamwork',
      description: 'Agile methodologies and pair programming',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      skill: 'Adaptability',
      description: 'Quick learner with emerging technologies',
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Core Technologies
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreTechSkills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreTechSkills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreTechSkills.databases.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools & Platforms
              </h3>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Skills
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.skill}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}