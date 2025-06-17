import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../img/ashu.jpg";
import '../App.css'

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-40 pb-20 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Hero Content */}
          <div className="max-w-3xl animate-fade-in order-1 text-center md:text-left pt-16">
            <h4 className="text-primary-blue mb-2 font-medium ">Hello, I'm</h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Amresh Asis Tripathy
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-primary-blue bg-clip-text text-transparent font-semibold mb-6">
              Full-stack Web Developer
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              I build performant, scalable, and visually compelling web apps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="hire-btn">
                Hire Me
              </Button>
              <a
                href="https://drive.google.com/file/d/1np56W-BiQHwM5QqC2p70YrPeyAOsX6G8/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-white/10 text-white px-8 py-6 rounded-md flex items-center gap-2 btn-glow transition-all home-sci-btn"
                >
                  View Resume
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-fade-in order-2 flex justify-center items-center">
            <div className="relative">
              {/* Blurry Border */}
              <div
                className="absolute inset-0 w-full h-full rounded-full z-0
                  bg-gradient-to-tr from-primary-blue via-blue-400 to-blue-200
                  blur-2xl opacity-60 scale-110"
                aria-hidden="true"
              />
              <Avatar
                className="relative w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] border-1 border-white/40 bg-blue/20 rounded-full overflow-hidden z-10 ml-10"
                style={{ boxShadow: "0px 0px 0px rgba(0, 238, 255, 0.503)" }}
              >
                <AvatarImage
                  src={logo}
                  alt="Amresh Asis Tripathy"
                  className="object-cover w-full h-full object-top"
                />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
