import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMasterTimeline } from "./TimeLineGSAP";

import experiences from "../data/experience.json"; // Asegúrate de que la ruta sea correcta

gsap.registerPlugin(ScrollTrigger);

const Experience = () => { 

  const elementsRef = useRef([]);
  const masterTimeline = useMasterTimeline();

  useLayoutEffect(() => {
    elementsRef.current = elementsRef.current.slice(0, experiences.length);
    elementsRef.current.forEach((el) => {
        gsap.set(el, { autoAlpha: 0, opacity: 0 });
    });

    ScrollTrigger.batch(elementsRef.current, {
      onEnter: (batch) => {
        batch.forEach((el, i) => {
            const idx = parseInt(el.dataset.idx); // índice real si lo estás usando
            const isEven = idx % 2 === 0;

            gsap.fromTo(
            el,
            {
                autoAlpha: 0,
                opacity: 0,
                x: isEven ? -200 : 200,
            },
            {
                autoAlpha: 1,
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                delay: i * 0.8,
                ease: "power3.out",
            }
            );
        });
        },
      once: true,
      interval: 0.2,
      start: "top 85%",      
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [masterTimeline, experiences.length]);


  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px-4">
      {/* Línea central */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-1/2" />

      {experiences.map((exp, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <div
            ref={(el) => (elementsRef.current[idx] = el)}
            data-idx={idx}
            key={idx}
            className={`relative mb-12 flex flex-col md:flex-row items-center justify-between w-full ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Punto en la línea */}
            <div className="z-10 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white dark:border-gray-900 shadow-md absolute left-2 md:left-1/2 top-2 transform md:-translate-x-1/2" />

            {/* Línea divisoria (espaciador visual entre punto y contenido) */}
            <div className="hidden md:block w-5 h-1 bg-transparent" />

            {/* Contenido */}
            <div
              className={`bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 ml-10 md:ml-0 md:max-w-[45%] w-full ${
                isLeft ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"
              }`}
            >
              <h3 className="text-yellow-500 font-bold text-lg">{exp.role}</h3>
              <p className="text-gray-700 dark:text-white font-semibold">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{exp.date}</p>
              <p className="mt-2 text-gray-800 dark:text-gray-300">{exp.description}</p>

              {/* Bandera SVG segura */}
              <div
                className="mt-4 inline-block w-6 h-4"
                dangerouslySetInnerHTML={{ __html: exp.flag }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
