import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import colorpalette from "../img/colorpalette.png";
import cfd from "../img/cfd.png";
import icic from "../img/image3.png";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  liveUrl,
  // githubUrl,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  // githubUrl: string;
}) => {
  return (
    <div className="glass group overflow-hidden rounded-lg transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
          <div className="flex gap-3">
            {/* <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary-blue p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <Github className="w-5 h-5" />
            </a> */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary-blue p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs bg-white/5 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      image: colorpalette,
      title: " ColorMuse: Your Daily Dose of Palette Inspiration",
      description:
        "“Discover, Save, and Share Stunning Color Combinations — One Day at a Time.",
      tags: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://daily-color-palette.netlify.app/",
      
    },
    {
      image: cfd,
      title: "CFD – CENTRE FOR DIGNITY",
      
      description:
        "Centre for Dignity (CFD) is a consulting, training and policy research institution with a specialised focus on the Corporate and Development sector.",
      tags: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://cfd.org.in/",
      
    },
   
    
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              // githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-transparent border border-primary-blue/50 text-white hover:bg-primary-blue/10 rounded-md btn-glow transition-all">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
