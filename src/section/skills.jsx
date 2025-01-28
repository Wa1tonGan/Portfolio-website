import { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaJava } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiPhp, SiMysql, SiWordpress } from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "WordPress", icon: <SiWordpress /> }, // CMS added to frontend
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MySQL", icon: <SiMysql /> }, // Database added to backend
    { name: "Java", icon: <FaJava /> }, // Java added to backend
  ];

  return (
    <section id="technical-skills" className="py-20 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === "frontend"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === "backend"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Backend
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {(activeTab === "frontend" ? frontendSkills : backendSkills).map(
            (skill, index) => (
              <div
                key={skill.name}
                className="group p-6 flex flex-col items-center justify-center rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-6xl text-gray-700 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                  {skill.icon}
                </div>
                {/* Skill Name */}
                <span className="text-lg font-medium text-gray-600 group-hover:text-gray-900">
                  {skill.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
