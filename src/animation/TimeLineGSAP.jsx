import { createContext, useRef, useContext } from "react";
import gsap from "gsap";

const TimelineContext = createContext();

export const MasterTimelineProvider = ({ children }) => {
  const master = useRef(gsap.timeline({ paused: false }));

  return (
    <TimelineContext.Provider value={master.current}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useMasterTimeline = () => useContext(TimelineContext);
