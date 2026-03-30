import {FaGithub} from "react-icons/fa";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {ExternalLink, Info} from "lucide-react";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="w-full">
      <div className="bg-white  h-full w-full drop-shadow-xl rounded-2xl overflow-hidden">
        <Image src={"/my-finances.png"} width={800} height={480} alt="" />
      </div>
      <div className="flex flex-col justify-end gap-4 p-8">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="primary" onClick={() => {}} className="gap-1.5">
            <Info className="w-3.5 h-3.5" />
            Saiba Mais
          </Button>
          <Button size="sm" variant="primary" asChild className="gap-1.5">
            <a href={""} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
          </Button>
          <Button size="sm" variant="primary" asChild className="gap-1.5">
            <a href={""} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5" />
              Deploy
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
