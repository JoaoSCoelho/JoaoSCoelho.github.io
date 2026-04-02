"use client";

import {SectionInViewProvider} from "@/contexts/SectionInViewContext";
import {ReactNode} from "react";
import {CookiesProvider} from "react-cookie";

export type BodySiteProps = {
  children: ReactNode;
};

export const BodySite = ({children}: BodySiteProps) => {
  return (
    <CookiesProvider>
      <SectionInViewProvider>{children}</SectionInViewProvider>
    </CookiesProvider>
  );
};
