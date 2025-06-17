
import { cn } from "@/lib/utils";

const EducationItem = ({
  degree,
  institution,
  duration,
  description,
  isLast = false
}: {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  isLast?: boolean;
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
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
              {duration}
            </span>
          </div>
          <h4 className="text-primary-blue mb-3">{institution}</h4>
          {description && <p className="text-gray-300">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology (Electrical Engineering)",
      institution: "NIST",
      duration: "2018 - 2021",
      description: "Specialized in Electrical Engineering with a focus on power systems and renewable energy."
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "Uma Charan Patnaik Engineering School",
      duration: "2015 - 2018",
    },
    {
      degree: "High School",
      institution: "SSVM School",
      duration: "2015",
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              duration={edu.duration}
              description={edu.description}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
