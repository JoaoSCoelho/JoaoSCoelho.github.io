import {SectionName, useSectionInView} from "@/contexts/SectionInViewContext";
import {useEffect, useRef} from "react";

export type SectionWrapperProps = {
  children: React.ReactNode;
  sectionName: SectionName;
};

export const SectionWrapper = ({children, sectionName}: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {setCurrentSection} = useSectionInView();

  useEffect(() => {
    const checkPosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setCurrentSection(sectionName);
        }
      }
    };

    checkPosition();

    window.addEventListener("scroll", checkPosition);

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  return (
    <div ref={sectionRef} id={sectionName} className="min-h-dvh h-full flex w-full flex-col">
      <div className="header-separator h-20 w-full"></div>
      {children}
    </div>
  );
};
