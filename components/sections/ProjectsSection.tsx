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
                title: "My Finances",
                image: "/my-finances.png",
                about: (
                  <div className="whitespace-normal">
                    <p>
                      O projeto <strong>My Finances (Front-End)</strong> é um gerenciador de despesas pessoais
                      feito em Next.JS com TypeScript.
                      <br />
                      A proposta foi fazer um projeto simples envolvendo front-end e back-end, deixá-lo online
                      e com uma documentação bem legível.
                      <img
                        className="my-3"
                        src="https://github.com/JoaoSCoelho/my-finances-frontend/blob/main/resources/usage-gif.gif?raw=true"
                        alt="GIF de uso do MyFinances"
                      />
                    </p>
                    <p>
                      O projeto conta com um Back-End feito em Express com TypeScript, usando ferramentas como
                      BCrypt, Json Web Token e Jest, princípios do SOLID e Clean Architecture e banco de dados
                      NoSQL MongoDB.
                    </p>
                    <p>
                      O Back-End pode ser acessado por aqui:{" "}
                      <a
                        className="text-blue-100 underline cursor-pointer"
                        href="https://api.myfinances.joaoscoelho.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        api.myfinances.joaoscoelho.com
                      </a>
                      e o código fonte encontra-se disponível no GitHub em:
                      <a
                        className="text-blue-100 underline cursor-pointer"
                        href="https://github.com/JoaoSCoelho/my-finances-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/JoaoSCoelho/my-finances-backend
                      </a>
                    </p>
                    <figure className="my-3">
                      <img
                        src="https://github.com/JoaoSCoelho/my-finances-backend/raw/main/resources/backend-workflow.png"
                        alt="Workflow backend"
                      />
                      <legend>Workflow de programação</legend>
                    </figure>
                  </div>
                ),
                deploy: "https://myfinances.joaoscoelho.com",
                github: "https://github.com/JoaoSCoelho/my-finances-frontend",
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
              {
                title: "IFBA Dashboard",
                image: "/if-dash.png",
                about: (
                  <div className="whitespace-normal">
                    <p>
                      O <strong>IFBA Dashboard</strong> (IF Dash) foi um site criado inteiramente com Next.JS
                      e Firebase para suprir uma demanda pessoal e de parte da minha turma do colégio no
                      ensino médio, durante o período de aulas remotas. Este projeto foi feito em
                      aproximadamente 1 semana utilizando-se de TypeScript e Next Apis para acelerar o
                      processo de desenvolvimento.
                    </p>
                    <figure className="my-3">
                      <img
                        src="https://github.com/JoaoSCoelho/ifba_dashboard/blob/main/resources/usage-example.gif?raw=true"
                        alt="Demo IF Dash"
                      />
                      <legend>Demonstração do IF Dash</legend>
                    </figure>
                    <p>
                      <span className="text-orange-300">
                        Atualmente devido a atualizações do Next APIs, o backend encontra-se offline, não
                        sendo possível se autenticar no sistema, mas a página inicial segue viva!
                      </span>
                    </p>
                  </div>
                ),
                deploy: "https://ifdash.joaoscoelho.com",
                github: "https://github.com/JoaoSCoelho/ifba_dashboard",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
