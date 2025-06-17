import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  FileCode,
  FileText,
  Database,
  Github,
  ArrowRight,
} from "lucide-react";

const SkillCard = ({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) => {
  return (
    <div className="glass p-6 rounded-xl transition-all group hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(0,234,255,0.25)] hover:border-cyan-400 border border-transparent">
      <div className="mb-4 flex items-center gap-3">
        <div className="p-3 rounded-md bg-primary-blue/10 text-primary-blue">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10 hover:border-primary-blue/50 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    { id: "technical", label: "Technical Skills" },
    { id: "soft", label: "Soft Skills" },
  ];

  const technicalSkills = [
    {
      icon: FileCode,
      title: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      icon: Code,
      title: "Programming",
      items: ["Python", "C#", "Shell Scripting", "OOP"],
    },
    {
      icon: Database,
      title: "Database",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      icon: Github,
      title: "DevOps",
      items: ["Git", "GitHub", "Docker", "Azure"],
    },
    {
      icon: FileText,
      title: "Others",
      items: ["UI/UX Design", "Responsive Design", "Performance Optimization"],
    },
  ];

  const softSkills = [
    "Problem-solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="flex p-1 bg-white/5 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-5 py-2 rounded-md text-sm font-medium transition-all",
                    activeTab === tab.id
                      ? "bg-primary-blue text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "technical" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  items={skill.items}
                />
              ))}
            </div>
          ) : (
            <div className="glass p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-primary-blue" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
