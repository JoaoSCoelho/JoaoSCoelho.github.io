import {useState} from "react";
import {ProjectCard} from "./ProjectCard";
import clsx from "clsx";

export type ProjectData = {
  image: string;
  about: string;
  github: string | null;
  deploy: string | null;
};

export type ProjectsCarouselProps = {
  projectsData: ProjectData[];
};

export const ProjectsCarousel = ({projectsData}: ProjectsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full whitespace-nowrap overflow-auto no-scrollbar relative">
      {projectsData.map((projectData, i) => {
        return (
          <div className={clsx(i === currentIndex ? "w-200 h-120" : "w-160 h-112")}>
            <ProjectCard key={projectData.image + i} />
          </div>
        );
      })}
    </div>
  );
};
