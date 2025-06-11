import projectData from "../data/projects.json";
import { FaGithub, FaVuejs, FaNodeJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiFastapi, SiPython, SiAstro } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSchema } from "react-icons/md";

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
};

const colorClasses = {
  blue: "bg-blue-500/30 text-blue-700 dark:text-blue-300 hover:bg-blue-500/40",
  green: "bg-green-400/20 text-green-600 dark:text-green-300 hover:bg-green-500/40",
  red: "bg-red-400/20 text-red-600 dark:text-red-400 hover:bg-red-500/40",
  gray: "bg-gray-400/20 text-gray-700 dark:text-gray-200 hover:bg-gray-400/40",
  yellow: "bg-yellow-300/30 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-400/40",
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((item) => (
        <article
          key={item.title}
          className="relative group overflow-hidden rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900"
          aria-labelledby={`project-title-${item.title}`}
        >
          {/* Imagen del proyecto */}
          <img
            src={item.img[0]}
            alt={item.title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay visible al hover */}
          <div className="absolute inset-0 bg-white/90 dark:bg-black/85 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 gap-3">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 line-clamp-2">
              {item.description}
            </p>

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
        </article>
      ))}
    </div>
  );
}
