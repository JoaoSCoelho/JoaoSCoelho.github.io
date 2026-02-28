import {SECTIONS, useSectionInView} from "@/contexts/SectionInViewContext";
import {HeaderLink} from "./HeaderLink";
import clsx from "clsx";

export const HeaderNav = () => {
  const {currentSection} = useSectionInView();

  return (
    <nav className="hidden md:flex items-center font-semibold relative">
      <HeaderLink hash="#begin">Início</HeaderLink>
      <HeaderLink hash="#projects">Projetos</HeaderLink>
      <HeaderLink hash="#research">Pesquisa</HeaderLink>
      <HeaderLink hash="#about">Sobre mim</HeaderLink>
      <div
        style={{
          left: `${(SECTIONS.indexOf(currentSection) + 1) * 88 - 44}px`,
        }}
        className={clsx("bar w-4 absolute -bottom-2 h-0.5 transition-all bg-blue-400 -translate-x-1/2")}
      ></div>
    </nav>
  );
};
