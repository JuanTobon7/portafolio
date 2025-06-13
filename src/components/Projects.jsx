import projectData from "../data/projects.json";
import { FaGithub, FaVuejs, FaNodeJs, FaJava, FaDatabase, FaReact } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiFastapi, SiPython, SiAstro, SiJsonwebtokens, SiGradle, SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSchema, MdDescription } from "react-icons/md";

const iconMap = {
  FaGithub,
  FaVuejs,
  FaNodeJs,
  FaLink,
  BiLogoPostgresql,
  SiExpress,
  SiFastapi,
  SiPython,
  SiAstro,
  RiTailwindCssFill,
  MdOutlineSchema,
  FaJava,
  SiJsonwebtokens,
  FaDatabase,
  SiGradle,
  SiSpringboot,
  MdDescription,
  FaReact
};

const colorClasses = {
  blue: "bg-blue-500/30 text-blue-600 dark:text-blue-300 hover:bg-blue-500/40",
  green: "bg-green-400/20 text-green-600 dark:text-green-300 hover:bg-green-500/40",
  red: "bg-red-400/20 text-red-600 dark:text-red-400 hover:bg-red-500/40",
  gray: "bg-gray-400/20 text-gray-700 dark:text-gray-200 hover:bg-gray-400/40",
  yellow: "bg-yellow-300/30 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-400/40",
  purple: "bg-purple-400/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/40",
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((item) => (
        <article
          key={item.title}
          className="relative group overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-200 hover:bg-gray-300/80 dark:bg-gray-800 dark:hover:bg-gray-900 transition-colors duration-75"
          aria-labelledby={`project-title-${item.title}`}
        >
          {/* Imagen principal */}
          <div className="relative">
            <img
              src={item.img[0]}
              alt={item.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/90 dark:bg-black/85 text-black dark:text-white md:opacity-0 opacity-100 group-hover:scale-105 group-hover:opacity-100 flex flex-col justify-end p-8 gap-3 backdrop-blur-sm">
              <h3 className="text-xl font-bold">{item.title}</h3>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-4">
                {item.tech.map((tech) => {
                  const Icon = iconMap[tech.icon];
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                      <span
                        className={`text-2xl rounded-full p-2 flex items-center justify-center ${colorClasses[tech.color]}`}
                      >
                        {Icon && <Icon />}
                      </span>
                      <span className="text-xs font-medium mt-1 text-black dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Repositorios */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.repos.map((repo) => {
                  const Icon = iconMap[repo.icon];
                  return (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-black dark:text-white bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {Icon && <Icon className="text-lg" />}
                      <span className="text-sm">{repo.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Descripción por fuera */}
          <div className="p-4 h-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}