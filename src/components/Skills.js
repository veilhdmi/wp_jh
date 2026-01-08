import React from 'react';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa'; // FontAwesome
import { SiR, SiTableau, SiPowerbi, SiMongodb, SiPostgresql, SiJavascript, SiMysql, SiLooker, SiDbt } from 'react-icons/si'; // SimpleIcons

export default function Skills() {
  return (
    <section className="min-h-screen px-4 py-12 md:px-20 lora" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-600 bold-phrase">Skills</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          I always bring together the proper methods and tools to achieve the best possible outcomes.
        </p>
      </div>

      {/* Sección Data Analytics */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-6 ml-11">Data Management</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {uxUiSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Sección Web Development */}
      <div>
        <h3 className="text-2xl font-bold text-black mb-6 ml-11">Web Development</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {toolsSkills.map((tool) => (
            <SkillCard key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-4">
      <skill.icon className="h-12 w-12 mb-4 text-gray-800" /> {/* Icono */}
      <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
    </div>
  );
}

// Datos de las habilidades (Data Analytics y Web Development)
const uxUiSkills = [
  { name: "Python", icon: FaPython },
  { name: "R", icon: SiR },
  { name: "Tableau", icon: SiTableau },
  { name: "PowerBI", icon: SiPowerbi },
  { name: "MySQL/SQL", icon: SiMysql },
  { name: "Looker", icon: SiLooker },
  { name: "DBT", icon: SiDbt }, // No hay icono oficial, pero puedes elegir
];

const toolsSkills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
];
