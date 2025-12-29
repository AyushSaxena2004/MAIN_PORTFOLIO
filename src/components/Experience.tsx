import { Briefcase, Calendar } from "lucide-react";
import { Experience as ExperienceType } from "../types";

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      id: "1",
      company: "Cyberinfomines Technologies Pvt Ltd",
      logo: "CT",
      role: "Technical Trainer (DSA)",
      duration: "Nov 2025 - Present",
      responsibilities: [
        "Delivered structured training sessions on Data Structures and Algorithms (DSA)",
        "Helped students improve logical thinking and coding efficiency",
        "Reviewed student code and provided constructive feedback",
        "Prepared and shared practice problems, assignments, and study material",
      ],
      achievements: [
        "Successfully trained multiple batches of students in DSA fundamentals",
        "Improved student problem-solving skills and coding confidence",
        "Received positive feedback for clear explanations and teaching methodology",
      ],
      tools: [
        "C++",
        "Java",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Competitive Programming",
      ],
    },
    {
      id: "2",
      company: "Zircog Technologies",
      logo: "ZT",
      role: "Software Developer",
      duration: "May 2025 - Nov 2025",
      responsibilities: [
        "Worked on backend development using Java and Spring Boot",
        "Developed and maintained RESTful APIs for business applications",
        "Tested APIs and workflows using Postman",
        "Used Python for scripting, automation, and backend utilities",
      ],
      achievements: [
        "Contributed to scalable and maintainable backend services",
        "Improved application performance through caching and query optimization",
        "Successfully delivered assigned modules within project timelines",
      ],
      tools: [
        "Java",
        "Spring Boot",
        "Python",
        "Redis",
        "Apache Kafka",
        "SQL",
        "Postman",
      ],
    },
    {
      id: "3",
      company: "Adda247",
      logo: "A24",
      role: "Software Engineer",
      duration: "Oct 2024 - May 2025",
      responsibilities: [
        "Developed and maintained backend services using Java and Spring Boot",
        "Designed and implemented RESTful APIs for core application features",
        "Integrated Redis for caching to improve system performance",
        "Wrote and optimized SQL queries for efficient data handling",
      ],
      achievements: [
        "Improved API response time by implementing Redis caching",
        "Successfully handled high-volume data processing using Kafka",
        "Contributed to stable and scalable backend systems in production",
      ],
      tools: [
        "Java",
        "Spring Boot",
        "Redis",
        "Apache Kafka",
        "SQL",
        "JIRA",
        "Elasticsearch",
        "Kibana",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:ml-0 md:mr-auto md:pr-12"
                  : "md:ml-auto md:mr-0 md:pl-12"
              } md:w-1/2`}
            >
              <div className="absolute left-8 md:left-auto md:right-[-17px] w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

              <div className="ml-20 md:ml-0 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.duration}</span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-green-700 dark:text-green-400 flex items-start"
                      >
                        <span className="mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
