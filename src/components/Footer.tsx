import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-400">
              Built with{' '}
              <Heart className="w-4 h-4 inline text-red-500 fill-current" /> and modern
              technologies
            </span>
          </div>

          <div className="text-gray-600 dark:text-gray-400">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
