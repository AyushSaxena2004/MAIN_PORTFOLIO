import { ExternalLink, Github, Star } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Activitar Project",
      description:
        "A modern fitness platform offering personalized workout plans, diet tracking, and online coaching with real-time progress monitoring.",
      problem:
        "Users struggle to find a structured and personalized fitness system that combines workouts, diet plans, progress tracking, and expert guidance in one place.",
      role: "MERN Stack Developer",
      features: [
        "Personalized workout plans",
        "Diet & calorie tracking system",
        "User authentication & role management",
        "Responsive and modern UI",
      ],
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT Auth",
        "Firebase",
      ],
      architecture: "Microservices with event-driven architecture",
      githubUrl: "https://github.com/AyushSaxena2004/project_1",
      liveUrl: "https://ayushsaxena2004.github.io/project_1/",
      imageUrl: "Project_1.png",
      isFeatured: true,
    },
    {
      id: "2",
      title: "JhumkaKart – Jhumka Store",
      description:
        "A modern e-commerce platform for beautifully crafted traditional jhumkas.",
      problem:
        "Local jhumka sellers lack a dedicated online platform to showcase multiple varieties, manage products, and sell directly to customers.",
      role: "Full Stack Developer",
      features: [
        "collections (Oxidised, Silver, Traditional)",
        "Product listing with categories",
        "Responsive design for mobile & desktop",
        "Secure and user-friendly UI",
      ],
      techStack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/khushi036/E_commerce-website.git",
      liveUrl: "https://github.com/khushi036/E_commerce-website.git",
      imageUrl: "Project_2.png",
      isFeatured: true,
    },
    {
      id: "3",
      title: "Kitaab Store",
      description:
        "A modern online platform to buy and sell books at the best prices.",
      problem:
        "Readers and sellers lack a simple digital platform to buy, sell, and discover books easily at affordable prices.",
      role: "MERN Stack Developer",
      features: [
        "Buy and sell books online",
        "Clean and user-friendly UI",
        "Responsive design for all devices",
        "Search books by title and category",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
      ],
      architecture: "Serverless architecture with AWS Lambda",
      githubUrl: "https://github.com/AyushSaxena2004/KITAAB_STORE.git",
      liveUrl: "https://github.com/AyushSaxena2004/KITAAB_STORE.git",
      imageUrl: "Project_3.png",
      isFeatured: true,
    },
    // {
    //   id: "4",
    //   title: "Social Media Scheduler",
    //   description: "Automate social media posts across multiple platforms",
    //   problem: "Content creators spent hours manually posting across platforms",
    //   role: "Solo Developer",
    //   features: [
    //     "Multi-platform support",
    //     "Content calendar",
    //     "Analytics",
    //     "Bulk scheduling",
    //   ],
    //   techStack: ["React", "Node.js", "MongoDB", "OAuth2"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    //   imageUrl:
    //     "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
    //   isFeatured: false,
    // },
    // {
    //   id: "5",
    //   title: "Real Estate Portal",
    //   description: "Property listing platform with virtual tours",
    //   problem:
    //     "Property searches were inefficient and lacked immersive experiences",
    //   role: "Backend Developer",
    //   features: [
    //     "Advanced search filters",
    //     "360° virtual tours",
    //     "Mortgage calculator",
    //     "Agent messaging",
    //   ],
    //   techStack: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    //   imageUrl:
    //     "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    //   isFeatured: false,
    // },
    // {
    //   id: "6",
    //   title: "Fitness Tracking App",
    //   description: "Personal fitness companion with workout plans",
    //   problem:
    //     "Users needed personalized fitness guidance and progress tracking",
    //   role: "Full Stack Developer",
    //   features: [
    //     "Custom workout plans",
    //     "Progress tracking",
    //     "Nutrition logging",
    //     "Social challenges",
    //   ],
    //   techStack: ["React Native", "Node.js", "MongoDB", "GraphQL"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    //   imageUrl:
    //     "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    //   isFeatured: false,
    // },
  ];

  const featuredProjects = projects.filter((p) => p.isFeatured);
  // const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work solving real-world problems with modern
            technology
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`relative overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Problem:
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        My Role:
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
