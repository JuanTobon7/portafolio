import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const ArrowDown = () => {
  const arrowRef = useRef(null);
  const [atBottom, setAtBottom] = useState(false);

  // Bounce animation
  useLayoutEffect(() => {
    const element = arrowRef.current;
    if (!element) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(element, { y: 10, duration: 0.5, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, []);

  // Detecta si estás en el fondo de la página
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      // Si la suma del scroll + alto ventana >= alto total - margen
      if (scrollY + windowHeight >= bodyHeight - 10) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chequear al montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top o bottom
  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      ref={arrowRef}
      onClick={handleClick}
      className="fixed bottom-10 right-10 text-white text-4xl z-50 cursor-pointer transition-transform duration-75"
      aria-label={atBottom ? "Volver arriba" : "Ir abajo"}
    >
      {atBottom ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
    </button>
  );
};

export default ArrowDown;
