import {FaGithub} from "react-icons/fa";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {ExternalLink, Info} from "lucide-react";
import Image from "next/image";
import {ReactNode, useState} from "react";
import clsx from "clsx";

export type ProjectData = {
  image: string;
  about: ReactNode;
  github: string | null;
  deploy: string | null;
  title: ReactNode;
};

export type ProjectCardProps = {
  data: ProjectData;
  index: number;
};

export const ProjectCard = ({data}: ProjectCardProps) => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-white relative h-full w-full drop-shadow-xl rounded-2xl overflow-hidden">
        <Image src={data.image} width={800} height={480} alt="" />
        <div className="flex flex-col justify-end gap-4 p-8 absolute z-10 bottom-0">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={aboutOpen ? "primary-inv" : "primary"}
              onClick={() => {
                setAboutOpen(!aboutOpen);
              }}
              className={clsx("gap-1.5 cursor-pointer")}
            >
              <Info className="w-3.5 h-3.5" />
              Saiba Mais
            </Button>
            {data.github && (
              <Button size="sm" variant="primary" asChild className="gap-1.5">
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </Button>
            )}
            {data.deploy && (
              <Button size="sm" variant="primary" asChild className="gap-1.5">
                <a href={data.deploy} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Deploy
                </a>
              </Button>
            )}
          </div>
        </div>
        {aboutOpen && (
          <div className="absolute bg-linear-to-t from-blue-950/80  to-blue-950/50 text-white h-full top-0 w-full p-8 overflow-y-auto pb-30">
            <h3 className="text-3xl underline-offset-8 underline mb-8">
              <strong>{data.title}</strong>
            </h3>
            {data.about}
          </div>
        )}
      </div>
    </div>
  );
};
