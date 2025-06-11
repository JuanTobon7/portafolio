import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
      { autoAlpha: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );

    tl.fromTo(
      detail,
      { autoAlpha: 0, x: 50 },
      { autoAlpha: 1, x: 0, duration: 1.5, ease: "power2.out" },
      "<0.5"
    );
    tl.fromTo(
      contact,
      { autoAlpha: 0, y: -15},
      { autoAlpha: 1, x: 0, y:0, duration: 1.5, ease: "power2.out" },
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
      className="experience grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white"
    >
      <p className="years-experience flex flex-col items-center justify-center text-sm md:text-xl text-gray-300">
        <span className="text-yellow-400 text-6xl font-bold">+1</span> año de experiencia
      </p>
      <div className="flex flex-col items-center justify-between gap-2">
        <p className="detail-experience text-sm md:text-base text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil
            dolore ducimus reiciendis pariatur dignissimos mollitia assumenda autem
            perspiciatis quod, unde tempora corrupti eaque aliquid repudiandae!
            Placeat enim inventore omnis!
        </p>
         <div className="flex items-center justify-center @md:justify-start gap-4 contact">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-carlos-tobon-montoya"
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/JuanTobon7"
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:jctobon11.2@gmail.com?subject=Propuesta de Trabajo."
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                target="_blank"
              >
                <SiGmail />
              </a>
            </div>
      </div>
    </div>
  );
};

export default Experience;
