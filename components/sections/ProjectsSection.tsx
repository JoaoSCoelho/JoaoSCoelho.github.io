import {RiNextjsFill} from "react-icons/ri";
import {ProjectCard} from "../ProjectCard";
import {ProjectsCarousel} from "../ProjectsCarousel";
import {SiTypescript} from "react-icons/si";

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
                title: "My Finances (Front-End)",
                image: "/my-finances-front.png",
                about: (
                  <div>
                    <p className="whitespace-normal">
                      O projeto <strong>My Finances (Front-End)</strong> é um gerenciador de despesas pessoais
                      feito em Next.JS com TypeScript.
                      <br />
                      A proposta foi fazer um projeto simples envolvendo front-end e back-end, deixá-lo online
                      e com uma documentação bem legível.
                      <img
                        className="mt-3"
                        src="https://github.com/JoaoSCoelho/my-finances-frontend/blob/main/resources/usage-gif.gif?raw=true"
                        alt="GIF de uso do MyFinances"
                      />
                    </p>
                  </div>
                ),
                deploy: "https://my-finances-frontend.vercel.app/",
                github: "https://github.com/JoaoSCoelho/my-finances-frontend",
              },
              {
                title: "My Finances (Back-End)",
                image: "/my-finances-back.png",
                about: (
                  <div>
                    <p className="whitespace-normal">
                      O projeto <strong>My Finances (Back-End)</strong> é a API de gerenciamento de despesas
                      pessoais feito em Express com TypeScript, usando ferramentas como BCrypt, Json Web Token
                      e Jest, princípios do SOLID e Clean Architecture e banco de dados NoSQL MongoDB.
                      <br />A proposta foi fazer um projeto simples envolvendo front-end e back-end, deixá-lo
                      online e com uma documentação bem legível.
                    </p>
                    <figure>
                      <img
                        className="mt-3"
                        src="https://github.com/JoaoSCoelho/my-finances-backend/raw/main/resources/backend-workflow.png"
                        alt="Workflow backend"
                      />
                      <legend>Workflow de programação</legend>
                    </figure>
                  </div>
                ),
                deploy: "https://my-finances-backend.onrender.com",
                github: "https://github.com/JoaoSCoelho/my-finances-backend",
              },
              {
                title: "Coffee",
                image: "/coffee.png",
                about: (
                  <div>
                    <p className="whitespace-normal">
                      O projeto <strong>Coffee</strong> é um dos meus primeiros bots para Discord, com
                      proposta de ser multifuncional foi um pilar para diversos aprendizados na stack de
                      Node.JS e TypeScript, uso de Jest e integração com APIs externas. Atualmente encontra-se
                      descontinuado e devido a atualizações da API do Discord não se encontra em perfeito
                      estado de funcionamento, mas foi bastante testado pela comunidade de desenvolvedores de
                      bots do Discord.
                    </p>
                  </div>
                ),
                deploy: null,
                github: "https://github.com/MyRepoArchive/Coffee",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
