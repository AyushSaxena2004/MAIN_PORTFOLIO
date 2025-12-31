import { Award, ExternalLink, Trophy, BookOpen } from 'lucide-react';
import { Certification } from '../types';

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Software Engineering',
      issuer: 'Coursera',
      date: 'March 2024',
      credentialUrl: 'https://coursera.org/verify/specialization/A4U4HNDFQZNE',
      icon: 'Software',
    },
    {
      id: '2',
      title: 'Data Analytics',
      issuer: 'Udemy',
      date: 'July 2025',
      credentialUrl: 'ude.my/UC-ddffd652-d5ea-41a4-8031-8d728d5c03fc',
      icon: 'Analytics',
    },
    {
      id: '3',
      title: 'C++ Certificate',
      issuer: 'Coding Ninjas',
      date: 'September 2022',
      credentialUrl: 'certificate.codingninjas.com/verify/29d9b1b072fc8aa9',
      icon: 'Cpp',
    },
    {
      id: '4',
      title: 'Implementation and Testing',
      issuer: 'Coursera',
      date: 'March 2024',
      credentialUrl: 'https://coursera.org/verify/NYHLHZZ2PE7D',
      icon: 'Implementation',
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hackathon Joiner',
      description: 'Runner up at college Hackathon 2023',
      date: 'November 2023',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Open Source Contributor',
      description: 'Active contributor to React and Node.js ecosystems',
      date: 'Ongoing',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Technical Speaker',
      description: 'Presented Java Backend Concepts at Colleges',
      date: 'September 2023',
    },
  ];

  const getIconComponent = (iconType: string) => {
    const icons: { [key: string]: string } = {
      Software: '💻',
      Analytics: '📈',
      Cpp: '⌨️',
      Implementation: '🛠️',
    };
    return icons[iconType] || '📜';
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{getIconComponent(cert.icon)}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200 dark:border-slate-600"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.description}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {achievement.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
