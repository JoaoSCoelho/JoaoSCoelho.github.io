"use client";

import {useCookies} from "react-cookie";
import {useIsDesktop} from "./useIsDesktop";
import {useEffect} from "react";

export const useMobileAlert = () => {
  const {isDesktop} = useIsDesktop();
  const [cookies, setCookie] = useCookies(["do-no-show-mobile-alert-again"]);

  useEffect(() => {
    console.log(cookies);
  }, []);

  const doNotShowMobileAlertAgain = () => {
    setCookie("do-no-show-mobile-alert-again", true);
  };

  return {
    showMobileAlert: !isDesktop && !cookies,
    doNotShowMobileAlertAgain,
  };
};
