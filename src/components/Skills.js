import React from 'react';
import pythonIcon from '../assets/python.png';
import RIcon from '../assets/R.png';
import TableuIcon from '../assets/tableu.png';
import PowerIcon from '../assets/power.png';
import SqlIcon from '../assets/sql.png';
import SheetsIcon from '../assets/sheets.png';
import JavaIcon from '../assets/js.png';
import ReactIcon from '../assets/react.png';
import NodeIcon from '../assets/node.png';
import PostgreIcon from '../assets/postgre.png';
import MongoIcon from '../assets/mongo.png';

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
        <h3 className="text-2xl font-bold text-black mb-6 ml-11">Data Analytics</h3>
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
      <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-4" /> {/* Tamaño más pequeño */}
      <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
    </div>
  );
}

// Datos de las habilidades (UX/UI Design y Tools)
const uxUiSkills = [
  { name: "Python", icon: pythonIcon },
  { name: "R", icon: RIcon },
  { name: "Tableu", icon: TableuIcon },
  { name: "PowerBI", icon: PowerIcon },
  { name: "MySQL/SQL", icon: SqlIcon },
  { name: "Google Sheets", icon: SheetsIcon },
];

const toolsSkills = [
  { name: "JavaScript", icon: JavaIcon },
  { name: "React", icon: ReactIcon },
  { name: "NodeJS", icon: NodeIcon },
  { name: "PostgreSQL", icon: PostgreIcon },
  { name: "MongoDB", icon: MongoIcon },
];
