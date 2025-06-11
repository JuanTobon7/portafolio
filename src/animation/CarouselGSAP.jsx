import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaJava,  
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiRedis,
  SiLaravel,
  SiPhp,
  SiSpringboot,
  SiReact,
  SiTypescript
} from "react-icons/si";

const CarouselGSAP = () => {
  const containerRef = useRef(null);
  const skillsBank = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },    
    { icon: <FaVuejs />, name: "Vue.js", color: "text-green-500" },
    { icon: <SiReact />, name: "React.js", color: "text-cyan-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-700" },
    { icon: <SiPhp />, name: "PHP", color: "text-purple-600" },
    { icon: <SiLaravel />, name: "Laravel", color: "text-red-700" },
    { icon: <FaJava />, name: "Java", color: "text-orange-800" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "text-green-700" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-700" },
    { icon: <SiRedis />, name: "Redis", color: "text-red-600" },
    { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
    { icon: <FaGithub />, name: "GitHub", color: "text-gray-800" },
    { icon: <FaAws />, name: "AWS", color: "text-yellow-600" },
  ]
  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".carousel-item");

    const totalWidth = container.scrollWidth;

    // Duplica los elementos para que el loop parezca infinito
    items.forEach(item => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });

    gsap.to(container, {
      x: `-=${totalWidth / 2}`,      
      duration: 30,
      opacity: 1,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden w-full relative carousel-fade">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap carousel-track "
      >
        {skillsBank.map((skill, index) => (
          <div
            key={index}
            className={`carousel-item min-w-[200px] p-4 ${skill.color} mx-2 flex flex-col items-center justify-center`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="mt-2 text-white font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGSAP;
