import {
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Delivered 5+ Production Projects",
      description:
        "Successfully deployed scalable applications serving thousands of users",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Improved Performance by 60%",
      description:
        "Optimized application load times and database query efficiency",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Led Development Teams",
      description:
        "Mentored junior developers and established coding best practices",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Open Source Contributor",
      description:
        "Active contributor to popular open-source projects and libraries",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Full Stack Developer with 1.5 years of experience
              building modern web applications. I specialize in creating
              scalable, maintainable solutions and have worked as a Software
              Engineer and Programming Instructor.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My expertise spans across frontend frameworks like React, backend
              development with Node.js and Java Spring Boot, and database design
              with both SQL and NoSQL solutions. I thrive in collaborative
              environments and am committed to writing clean, efficient code.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Areas of Expertise
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Development, API Design, Database Architecture,
                    Cloud Deployment, Performance Optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Tech Philosophy
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in writing code that is not just functional, but
                    elegant and maintainable. Clean architecture and user
                    experience are at the core of everything I build.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey into software development began during my university
              years when I built my first web application. What started as
              curiosity evolved into a deep passion for creating solutions that
              make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Over the years, I've worked with startups and established
              companies, each experience teaching me valuable lessons about
              scalability, user-centric design, and the importance of clean
              code. Today, I continue to learn and grow, staying current with
              the latest technologies and best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source
              projects, mentoring aspiring developers, or exploring new
              technologies that could shape the future of web development.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
