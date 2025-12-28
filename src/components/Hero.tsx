import { Download, Mail, ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Software Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Ayush Saxena
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Building scalable solutions that transform ideas into reality
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Passionate developer specializing in modern web technologies. I
              create robust, user-centric applications that solve real-world
              problems with clean, maintainable code and exceptional user
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=15Vh9MoA5CslJfmIROgvfXgxaOxXe5630"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-slate-700"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection("#projects")}
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="relative animate-fade-in-delayed">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 flex items-center justify-center">
                  <img
                    src="/ayush.jpeg"
                    alt="Ayush Saxena"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
