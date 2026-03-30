import {ProjectCard} from "../ProjectCard";
import {ProjectsCarousel} from "../ProjectsCarousel";

export type ProjectsSectionProps = {};

export const ProjectsSection = () => {
  return (
    <>
      <div className="header-separator h-20 w-full"></div>
      <div className="min-h-[calc(100dvh-80px)] relative flex flex-col px-16">
        <h2 className="text-4xl">Projetos</h2>
        <div className="flex h-full items-center justify-center w-full pt-16">
          <ProjectsCarousel
            projectsData={[
              {
                image: "/my-finances.png",
                about: "sdasd",
                deploy: "https://deploy.com",
                github: "https://github.com/JoaoSCoelho/project",
              },
              {
                image: "/my-finances.png",
                about: "sdasd",
                deploy: "https://deploy.com",
                github: "https://github.com/JoaoSCoelho/project",
              },
              {
                image: "/my-finances.png",
                about: "sdasd",
                deploy: "https://deploy.com",
                github: "https://github.com/JoaoSCoelho/project",
              },
              {
                image: "/my-finances.png",
                about: "sdasd",
                deploy: "https://deploy.com",
                github: "https://github.com/JoaoSCoelho/project",
              },
              {
                image: "/my-finances.png",
                about: "sdasd",
                deploy: "https://deploy.com",
                github: "https://github.com/JoaoSCoelho/project",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
