import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto glass p-8">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-xl border-4 border-primary-blue/20 shadow-lg shadow-primary-blue/10">
                <img
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Amresh Asis Tripathy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={cn(
                  "absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-primary-blue",
                  "rounded-lg py-2 px-4 text-white text-sm font-medium"
                )}
              >
                Full-Stack Developer
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <p className="text-lg text-gray-300 mb-6">
              I’m a Full-Stack Web Developer with experience in React.js,
              Next.js, and Java. I hold a Bachelor's degree from NIST and have
              worked on both freelance and company-based projects. I specialize
              in building responsive, user-focused web applications and enjoy
              turning ideas into clean, scalable code. Always eager to learn, I
              stay updated with the latest in web development.{" "}
            </p>
            <p  className="text-lg text-gray-300 mb-6">
              I’m also skilled in deploying apps to the cloud and using tools
              like Docker for containerization. My goal is to build fast,
              secure, and user-friendly digital experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-primary-blue font-bold text-lg">•</span>
                <span className="text-gray-200">
                  Name: Amresh Asis Tripathy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-blue font-bold text-lg">•</span>
                <span className="text-gray-200">
                  Email: amreshasis07@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-blue font-bold text-lg">•</span>
                <span className="text-gray-200">Phone: +91-7788929825</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-blue font-bold text-lg">•</span>
                <span className="text-gray-200">Location: India</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1np56W-BiQHwM5QqC2p70YrPeyAOsX6G8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <Button className="bg-primary-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md btn-glow transition-all mt-2">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
