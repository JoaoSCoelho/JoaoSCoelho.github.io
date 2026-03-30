import {useEffect, useRef, useState} from "react";
import {ProjectCard, ProjectData} from "./ProjectCard";
import clsx from "clsx";
import {Button} from "./ui/button";
import {FcNext} from "react-icons/fc";
import {GrFormNext} from "react-icons/gr";
import {ArrowBigLeftDash, ArrowBigRightDash} from "lucide-react";

export type ProjectsCarouselProps = {
  projectsData: ProjectData[];
};

export const ProjectsCarousel = ({projectsData}: ProjectsCarouselProps) => {
  // const [currentIndex, setCurrentIndex] = useState(2);
  const dragStartRef = useRef([0, 0]);
  const lastDragClientX = useRef<number[][]>([]);
  const currentIndexRef = useRef(2);
  const projectsCardsRef = useRef<HTMLDivElement[]>([]);
  const rotateAngle = 22.5;

  useEffect(() => {
    document.addEventListener("dragover", (e) => e.preventDefault());
  }, []);

  const onDragEnd = async () => {
    currentIndexRef.current = Math.round(currentIndexRef.current);
    setStyle(true);
  };
  const setStyle = (withTransition: boolean = false) => {
    projectsCardsRef.current.forEach((projectCardRef, i) => {
      Object.assign(projectCardRef.style, {
        top: "50%",
        left: `calc(50% + ${(i - currentIndexRef.current) * (550 * Math.cos((i - currentIndexRef.current) * rotateAngle * (Math.PI / 180)))}px)`,
        width: `${(1 - Math.abs(i - currentIndexRef.current) * 0.2) * 800}px`,
        height: `${(1 - Math.abs(i - currentIndexRef.current) * 0.2) * 480}px`,
        zIndex: `${Math.max(0, 10 - Math.abs(Math.round(i - currentIndexRef.current)))}`,
        rotate: `y ${(i - currentIndexRef.current) * rotateAngle}deg`,
        display: Math.abs(i - currentIndexRef.current) > 4 ? "none" : "initial",
        transition: withTransition ? "all 0.5s" : "none",
      });
    });
  };

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon-lg"}
        className="w-15 h-15 cursor-pointer"
        onClick={() => {
          currentIndexRef.current = Math.max(0, currentIndexRef.current - 1);
          setStyle(true);
        }}
      >
        <ArrowBigLeftDash className="w-12! h-12! text-blue-800" />
      </Button>
      <div
        className="w-full whitespace-nowrap overflow-hidden relative h-140 perspective-distant touch-none select-none"
        onDragStart={(e) => {
          dragStartRef.current = [e.clientX, currentIndexRef.current];
        }}
        onDrag={(e) => {
          if (!e.clientX) return;
          const offset = dragStartRef.current[0] - e.clientX;
          const ci = dragStartRef.current[1];
          currentIndexRef.current = Math.max(0, Math.min(projectsData.length - 1, ci + offset / 450));
          setStyle();
        }}
        onDragEnd={onDragEnd}
        onTouchStart={(e) => {
          dragStartRef.current = [e.targetTouches[0].clientX, currentIndexRef.current];
        }}
        onTouchMove={(e) => {
          if (!e.targetTouches[0].clientX) return;
          const offset = dragStartRef.current[0] - e.targetTouches[0].clientX;
          const ci = dragStartRef.current[1];
          currentIndexRef.current = Math.max(0, Math.min(projectsData.length - 1, ci + offset / 450));
          setStyle();
        }}
        onTouchEnd={onDragEnd}
      >
        {projectsData.map((projectData, i) => {
          return (
            <div
              style={
                {
                  // transition: "all 0.2s",
                }
              }
              className={clsx("absolute -translate-x-1/2 top-1/2 -translate-y-1/2")}
              ref={(elemento) => {
                projectsCardsRef.current[i] = elemento!;
              }}
            >
              <ProjectCard key={i} data={projectData} index={i} />
            </div>
          );
        })}
      </div>
      <Button
        variant={"ghost"}
        size={"icon-lg"}
        className="w-15 h-15 cursor-pointer"
        onClick={() => {
          currentIndexRef.current = Math.min(projectsData.length - 1, currentIndexRef.current + 1);
          setStyle(true);
        }}
      >
        <ArrowBigRightDash className="w-12! h-12! text-blue-800" />
      </Button>
    </>
  );
};
