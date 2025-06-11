import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMasterTimeline } from "./TimeLineGSAP";

const MachineTextGSAP = ({ text, speed = 0.08, size='big',color="text-white" }) => {
  const container = useRef(null);
  const master = useMasterTimeline();
  const safeText = text.replace(/ /g, "\u00A0");
  const sizeBank = {
    big: 'text-4xl md:text-6xl lg:text-9xl',
    medium: 'text-xl md:text-2xl',
    small: 'text-lg md:text-xl'
  };
  const sizeText = sizeBank[size] || sizeBank.big;
  useGSAP(() => {
    const spans = container.current.querySelectorAll("span");
    const tl = gsap.timeline();
    tl.to(spans, { opacity: 1, duration: speed, stagger: speed })
      .addLabel("typed");
    master.add(tl);
  }, { scope: container });

  return (
    <div
      ref={container}
      className={`flex flex-wrap items-center justify-center ${sizeText} text-center ${color} font-bold whitespace-pre-wrap`}
    >
      {safeText.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0"
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default MachineTextGSAP;
