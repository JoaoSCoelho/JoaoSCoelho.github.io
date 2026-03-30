import {useEffect, useRef, useState} from "react";
import {ProjectCard, ProjectData} from "./ProjectCard";
import clsx from "clsx";

export type ProjectsCarouselProps = {
  projectsData: ProjectData[];
};

export const ProjectsCarousel = ({projectsData}: ProjectsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const dragStartRef = useRef([0, 0]);

  const rotateAngle = 22.5;

  useEffect(() => {
    document.addEventListener("dragover", (e) => e.preventDefault());
  }, []);

  return (
    <>
      <div
        className="w-full whitespace-nowrap overflow-hidden relative h-140 perspective-distant touch-none"
        onDragStart={(e) => {
          dragStartRef.current = [e.clientX, currentIndex];
        }}
        onDrag={(e) => {
          if (!e.clientX) return;
          const offset = dragStartRef.current[0] - e.clientX;
          const ci = dragStartRef.current[1];
          setCurrentIndex(Math.max(0, Math.min(projectsData.length - 1, ci + offset / 450)));
        }}
        onTouchStart={(e) => {
          dragStartRef.current = [e.targetTouches[0].clientX, currentIndex];
        }}
        onTouchMove={(e) => {
          if (!e.targetTouches[0].clientX) return;
          const offset = dragStartRef.current[0] - e.targetTouches[0].clientX;
          const ci = dragStartRef.current[1];
          setCurrentIndex(Math.max(0, Math.min(projectsData.length - 1, ci + offset / 450)));
        }}
      >
        {projectsData.map((projectData, i) => {
          return (
            <div
              style={{
                top: "50%",
                left: `calc(50% + ${(i - currentIndex) * (550 * Math.cos((i - currentIndex) * rotateAngle * (Math.PI / 180)))}px)`,
                width: `${(1 - Math.abs(i - currentIndex) * 0.2) * 800}px`,
                height: `${(1 - Math.abs(i - currentIndex) * 0.2) * 480}px`,
                zIndex: `${Math.max(0, 10 - Math.abs(Math.round(i - currentIndex)))}`,
                rotate: `y ${(i - currentIndex) * rotateAngle}deg`,
              }}
              className={clsx("absolute -translate-x-1/2 top-1/2 -translate-y-1/2")}
            >
              <ProjectCard key={projectData.image + i} data={projectData} />
            </div>
          );
        })}
      </div>
    </>
  );
};
