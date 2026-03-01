export type ProjectsSectionProps = {};

export const ProjectsSection = () => {
  return (
    <>
      <div className="header-separator h-20 w-full "></div>
      <div className="h-[calc(100dvh-80px)] relative flex flex-col items-center justify-center ">
        <h1 className="text-4xl">Projetos</h1>
        <span className="text-gray-800 font-alfa-slab-one text-[150px]">EM BREVE</span>
        <div className="w-100 h-100 rounded-full bg-linear-to-br from-white to-transparent absolute left-1/2 -translate-x-120 -z-10"></div>
        <div className="w-150 h-150 rounded-full bg-linear-to-tl from-white to-transparent absolute left-1/2 -translate-x-20  -z-10"></div>
      </div>
    </>
  );
};
