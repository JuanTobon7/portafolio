import { FaGithub,FaVuejs,FaNodeJs} from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSchema } from "react-icons/md";
import Carousel from "./Carousel";

export default function Projects() {
  const colorClasses = {
    blue: "bg-blue-400/20 text-blue-600 hover:bg-blue-500/40",
    green: "bg-green-400/20 text-green-600 hover:bg-green-500/40",
    red: "bg-red-400/20 text-red-600 hover:bg-red-500/40",
    gray: "bg-gray-400/20 text-gray-50 hover:bg-gray-400/40",
  };
  const projects = [
    {
      title: "ViddeFe",
      url: "https://viddefe.com",
      description:
        "Una plataforma innovadora para la gestión y administración de iglesias, con herramientas como JWT, Redis y OAuth 2.0.",
      img: [
        '/projects/viddefe/ViddeFe.png',
        '/projects/viddefe/LoginViddeFe.png',
        '/projects/viddefe/Feed.png',
      ], // Cambia por una imagen real
      tech: [
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: colorClasses.blue },
        {name: 'Vue.js',icon: FaVuejs, color: colorClasses.green},
        {name: 'Express.js',icon: SiExpress, color: colorClasses.gray},
        {name: 'PostgreSQL',icon: BiLogoPostgresql, color: colorClasses.blue},
        {name: 'Node.js',icon: FaNodeJs, color: colorClasses.green},
      ],
      repos: [
        {name: 'Frontend', url: 'https://github.com/JuanTobon7/solutionsGray-Front', icon: FaGithub},
        {name: 'Backend', url: 'https://github.com/JuanTobon7/solutionsGray-Back', icon: FaGithub},
        {name: 'Drawer', url: 'https://drive.google.com/file/d/1mWMENoXdN-53km9ufaZAOqG5YOkBIc8y/view?usp=drive_link', icon: MdOutlineSchema},        
        {name: 'Preview', url: 'https://viddefe.com', icon: FaLink},
      ]
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
        {projects.map((item) => (
          <article
            key={item.title}
            className="grid grid-cols-1 items-center justify-between gap-6"
            aria-labelledby={`project-title-${item.title}`}
          >     
            <Carousel images={item.img} className="rounded-xl"/>
            <div className="flex flex-col items-start justify-between gap-3 w-full">
              <h3
                id={`project-title-${item.title}`}
                className="text-2xl font-bold text-white"
              >
                <strong>{item.title}</strong>
              </h3>             
              <div className="flex flex-wrap gap-2 w-full">
                {item.tech.map((tech) => (
                  <span key={tech.name} className={`px-2 cursor-pointer rounded-md flex items-center bg-opacity-20  transition-colors duration-200 ease-in-out ${tech.color}`}>
                    {tech.icon && <tech.icon className="inline-block mr-1" />}
                    <p className="text-white">{tech.name}</p>
                  </span>
                ))}
              </div>
              <p className="text-gray-400">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-gray-800 border border-gray-700 rounded-md px-2 py-1 hover:bg-gray-700 hover:border-gray-800 transition-colors duration-200 ease-in-out"
                  >
                    {repo.icon && <repo.icon className="inline-block text-xl" />}
                    <p>{repo.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}