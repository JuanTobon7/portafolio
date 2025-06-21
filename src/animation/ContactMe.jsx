import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const years = element.querySelector(".years-experience");
    const detail = element.querySelector(".detail-experience");
    const contact = element.querySelector(".contact");
    const tl = gsap.timeline(); // sin paused: true
    tl.fromTo(
      years,
      { autoAlpha: 0, x: -50 },
      { autoAlpha: 1, x: 0, duration: 0.3, ease: "power2.out" }
    );

    tl.fromTo(
      detail,
      { autoAlpha: 0, x: 50 },
      { autoAlpha: 1, x: 0, duration: 0.3, ease: "power2.out" },
      "<0.5"
    );
    tl.fromTo(
      contact,
      { autoAlpha: 0, y: -15},
      { autoAlpha: 1, x: 0, y:0, duration: 0.3, ease: "power2.out" },
      "<0.5"
    );

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom center",
      once: true,
      animation: tl,
      invalidateOnRefresh: true
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={ref}
      className="experience grid grid-cols-1 md:grid-cols-2 gap-4 p-4  text-gray-700 dark:text-gray-300"
    >
      <p className="years-experience flex flex-col items-center justify-center text-sm md:text-xl text-gray-700 dark:text-gray-300">
        <span className="text-yellow-500 text-7xl font-bold">+1</span> año de experiencia
      </p>
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="detail-experience text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-2 grid items-center justify-center">
            <p>
              Hola, soy <strong className="text-yellow-500">Juan Carlos Tobón Montoya</strong>, colombiano nacido en Villavicencio, Meta. Me apasiona el desarrollo de software porque me permite crear soluciones desde cero y ver cómo cobran vida a través del código.
            </p>
            <p>
              Soy una persona responsable, comprometida y con un fuerte deseo de aprender constantemente. Me adapto bien al trabajo en equipo, tanto en entornos presenciales como remotos.
            </p>
          </div>

         <div className="flex items-center justify-center @md:justify-start gap-4 contact">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-carlos-tobon-montoya"
                className="text-3xl  text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/JuanTobon7"
                className="text-3xl  text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                
              >
                <FaGithub />
              </a>
              <a
                href="mailto:jctobon11.2@gmail.com?subject=Propuesta de Trabajo."
                className="text-3xl  text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                target="_blank"
              >
                <SiGmail />
              </a>
              <a
                href="/Juan_Carlos_Tobón_Montoya_CV.pdf"
                className="text-3xl  text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                download
              >
                <TbFileCv />
              </a>
            </div>
      </div>
    </div>
  );
};

export default Experience;
