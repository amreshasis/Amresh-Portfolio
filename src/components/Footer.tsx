import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 glass mt-10 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">AT.dev</h3>
            <p className="text-gray-400 mt-2">Full-stack Developer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/amreshasis"
              className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 text-gray-300 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/asisamresh/"
              className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:amreshasis07@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-primary-blue/20 text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Amresh Asis Tripathy. All rights reserved.</p>

          <div className="flex mt-4 md:mt-0 space-x-6">
            <a
              href="#hero"
              className="hover:text-primary-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary-blue transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary-blue transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary-blue transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
