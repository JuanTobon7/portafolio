import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMasterTimeline } from "../animation/TimeLineGSAP";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const masterTl = useMasterTimeline();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
          once: true,
        },
      });

      tl.from(".about-fade", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
      });

      tl.to(imageRef.current, {
        rotate: 8,
        duration: 0.8,
        ease: "bounce.out",
      }, "<0.5");
      
      // Puedes agregar esta línea si quieres que forme parte del master timeline general
      masterTl && masterTl.add(tl, "about");
    }, aboutRef);

    return () => ctx.revert();
  }, [masterTl]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-center py-12 px-4"
    >
      {/* Texto */}
      <article className="md:col-span-3 space-y-5 about-fade">
        <p>
          Empecé en el desarrollo sin tener muy claro de qué se trataba, pero en el camino descubrí que crear soluciones con código es algo que me apasiona.
          Gracias a la universidad y experiencias propias, entendí el valor del <strong className="text-yellow-500">trabajo en equipo</strong> y la importancia de pensar más allá del código.
        </p>
        <p>
          Desarrollé por mi cuenta <strong className="text-yellow-500">ViddeFe</strong>, una aplicación web para iglesias, que me permitió aplicar y profundizar mis conocimientos técnicos.
          Me encanta observar problemas reales y buscar formas de resolverlos con tecnología; siempre estoy pensando en cómo mejorar procesos y facilitar la vida a otros.
        </p>
        <p>
          Estoy <strong className="text-yellow-500">totalmente abierto al aprendizaje</strong> y motivado por seguir creciendo cada día, tanto a nivel técnico como humano.
        </p>
      </article>

      {/* Imagen */}
      <div className="md:col-span-2 flex justify-center about-fade">
        <div
          ref={imageRef}
          className="p-3 rounded-xl shadow-xl ring-3 ring-gray-600 dark:ring-gray-700/60 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/JuanT.jpeg"
            alt="Juan Carlos Tobón Montoya"
            className="rounded-xl object-cover max-w-[280px] max-h-[280px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
