import { cn } from "@/lib/utils";

const ExperienceItem = ({
  company,
  position,
  duration,
  description,
  isLast = false,
  techStack,
  liveProject,
}: {
  company: string;
  position: string;
  duration: string;
  description: string;
  isLast?: boolean;
  techStack?: string[];
  liveProject?: string;
}) => {
  return (
    <div className="relative pb-12">
      {!isLast && (
        <div className="absolute left-5 top-5 h-full w-px bg-gradient-to-b from-primary-blue to-transparent"></div>
      )}
      <div className="flex gap-6">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-primary-blue flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="glass p-6 rounded-lg flex-1 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
            <h3 className="text-xl font-semibold text-white">{position}</h3>
            <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
              {duration}
            </span>
          </div>
          <h4 className="text-primary-blue mb-3">{company}</h4>
          <p className="text-gray-300 mb-3">{description}</p>
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-900/40 text-cyan-200 px-2 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "MBB Labs Private Limited (Maybank)",
      role: "Product Engineer",
      duration: "Nov 2023 – Present",
      description:
        "Developed a full-stack web application for Maybank analysts using React.js and Spring Boot, created RESTful APIs, designed a user-friendly UI, and enhanced transaction monitoring with match/mismatch screening in the TMNS system.",
      techStack: [
        "React.js",
        "Spring Boot",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Oracle SQL",
      ],
    },
    {
      company: "Freelancing",
      role: "Web Developer",
      duration: "May 2023 – Sep 2023",
      description:
        "Designed and developed responsive, interactive web interfaces and custom client solutions using React.js, HTML, CSS, Bootstrap, and JavaScript; delivered a live project for Centre for Dignity.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
      liveProject: "https://centrefordignity.com/",
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Junior Software Engineer",
      duration: "Nov 2021 – Apr 2023",
      description:
        "Supported Kenan Billing System operations, resolved customer tickets within SLA using SQL and Linux, provided client support with 85% satisfaction, and used ServiceNow for incident management.",
      techStack: ["Kenan Billing System", "SQL", "Linux", "ServiceNow"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              position={exp.role}
              duration={exp.duration}
              description={exp.description}
              techStack={exp.techStack}
              liveProject={exp.liveProject}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
