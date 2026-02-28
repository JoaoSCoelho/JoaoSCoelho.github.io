"use client";
import {MinhaSecao} from "@/components/MinhaSecao";
import {Header} from "../components/Header";
import {BeginSection} from "@/components/sections/BeginSection";
import {SectionWrapper} from "@/components/SectionWrapper";
import {ProjectsSection} from "@/components/sections/ProjectsSection";
import {ResearchSection} from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <div className="max-w-540 mx-auto ">
      <Header />
      <SectionWrapper sectionName="begin">
        <BeginSection />
      </SectionWrapper>
      <SectionWrapper sectionName="projects">
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper sectionName="research">
        <ResearchSection />
      </SectionWrapper>
    </div>
  );
}
