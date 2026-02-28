import {useEffect, useState} from "react";
import {BaselinedLink} from "./BaselinedLink";
import {SectionName, SECTIONS, useSectionInView} from "@/contexts/SectionInViewContext";

export type HeaderLinkProps = {
  children: React.ReactNode;
  hash: string;
};

export function HeaderLink({children, hash}: HeaderLinkProps) {
  const {currentSection} = useSectionInView();

  return (
    <div className="w-22 flex items-center justify-center">
      <BaselinedLink href={hash} active={hash.replace("#", "") === currentSection}>
        {children}
      </BaselinedLink>
    </div>
  );
}
