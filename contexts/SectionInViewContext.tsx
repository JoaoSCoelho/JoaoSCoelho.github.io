"use client";

import {createContext, useContext, useState, ReactNode, useMemo, useCallback} from "react";

export type SectionName = "begin" | "projects" | "research" | "about";

export const SECTIONS: SectionName[] = ["begin", "projects", "research", "about"];

type SectionInViewContextType = {
  currentSection: SectionName;
  lastSection: SectionName | null;
  setCurrentSection: (section: SectionName) => void;
};

const SectionInViewContext = createContext<SectionInViewContextType | undefined>(undefined);

export function SectionInViewProvider({children}: {children: ReactNode}) {
  const [sections, setSections] = useState<{current: SectionName; last: SectionName | null}>({
    current: "begin",
    last: null,
  });

  const setCurrentSection = useCallback((newSection: SectionName) => {
    setSections((prev) => {
      if (prev.current === newSection) {
        return prev;
      }

      return {
        current: newSection,
        last: prev.current,
      };
    });

    if (window.location.hash !== `#${newSection}`) {
      window.history.replaceState(null, "", `#${newSection}`);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      currentSection: sections.current,
      lastSection: sections.last,
      setCurrentSection,
    }),
    [sections],
  );

  return <SectionInViewContext.Provider value={contextValue}>{children}</SectionInViewContext.Provider>;
}

export function useSectionInView() {
  const context = useContext(SectionInViewContext);

  if (!context) {
    throw new Error("useSectionInView deve ser usado dentro de um SectionInViewProvider");
  }

  return context;
}
