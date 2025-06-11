import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useMasterTimeline } from "../animation/TimeLineGSAP";

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NavBar() {
  const nav = useRef(null);
  const master = useMasterTimeline();

  useLayoutEffect(() => {
    if (!master || !nav.current) return;

    const tl = gsap.timeline();
    tl.from(nav.current, {
      y: -100,
      opacity: 0,
      delay:1,
      duration: 0.5,
      ease: "power2.out",
      immediateRender: true
    });

    master.add(tl, 1); // Añádelo al inicio
  }, [master]);

  return (
    <nav ref={nav} className="fixed flex justify-center w-full top-2 z-10">
      <ul className="flex justify-between gap-3 bg-gray-700/60 border border-gray-800 backdrop-blur-sm px-5 py-2 font-medium rounded-full">
        <li>
          <button onClick={() => scrollTo('projects')} className="text-white cursor-pointer hover:text-blue-700">Proyectos</button>
        </li>
        <li>
          <button onClick={() => scrollTo('skills')} className="text-white cursor-pointer hover:text-blue-700">Skills</button>
        </li>
        <li>
          <button onClick={() => scrollTo('education')} className="text-white cursor-pointer hover:text-blue-700">Educación</button>
        </li>
        <li>
          <button onClick={() => scrollTo('about')} className="text-white cursor-pointer hover:text-blue-700">Sobre mí</button>
        </li>
      </ul>
    </nav>
  );
}
