"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut nihil ullam assumenda placeat iusto error veritatis, quibusdam vel ipsam consequatur veniam sint illo voluptates ut reprehenderit laudantium vero porro.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dennis Ramara",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+27) 60 946 8143",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Skype",
      fieldValue: "Dennis Ramara",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African",
    },
    {
      fieldName: "Email",
      fieldValue: "dennism.ramara@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sepedi",
    },
  ],
};

const experience = {
  icon: "/Assets/resume/badge.svg",
  title: "Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati dolorem deleniti dicta? Quis dignissimos ea nesciunt quae adipisci similique, veritatis voluptates cum debitis provident consequatur omnis consectetur deserunt hic.",
  items: [
    {
      company: "Tech Solutions Inc.",
      postion: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Web Design Studio",
      postion: "Front-End Developer Intern",
      duration: "2021-2022",
    },
    {
      company: "E-commerce Startup",
      postion: "Freelance Web Developer",
      duration: "2022 - present",
    },
    {
      company: "Tshwane University of Technology",
      postion: "Student Assistanct",
      duration: "2022 - present",
    },
    {
      company: "Tshwane University of Technology",
      postion: "Student Assistanct",
      duration: "2022 - present",
    },
    {
      company: "Tshwane University of Technology",
      postion: "Student Assistanct",
      duration: "2022 - present",
    },
  ],
};

const education = {
  icon: "/Assets/resume/cap.svg",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati dolorem deleniti dicta? Quis dignissimos ea nesciunt quae adipisci similique, veritatis voluptates cum debitis provident consequatur omnis consectetur deserunt hic.",
  items: [
    {
      institution: "Tshwane University of Technology",
      degree: "Bachelor of Information Technology",
      duration: "2020 - present",
    },
    {
      institution: "Pretoria High School",
      degree: "National Senior Certificate",
      duration: "2015 - 2019",
    },
    {
      institution: "Online Courses",
      degree: "Certifications in Web Development & UI/UX Design",
      duration: "2021 - present",
    },
    {
      institution: "Tshwane University of Technology",
      degree: "Bachelor of Information Technology",
      duration: "2020 - present",
    },
    {
      institution: "Pretoria High School",
      degree: "National Senior Certificate",
      duration: "2015 - 2019",
    },
    {
      institution: "Online Courses",
      degree: "Certifications in Web Development & UI/UX Design",
      duration: "2021 - present",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "A collection of technologies and tools I have experience with in web development, UI/UX design, and backend services.",
  skillList: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="about">
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.postion}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                           <p className="capitalize">{skill.name}</p> 
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text -4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return(
                      <li className="flex items-center justify-center xl:justify-start gap-4" key={index} >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
