import Image from "next/image";
import {SocialMediaBar} from "./SocialMediaBar";
import {Divider} from "@mui/material";

export const Footer = () => {
  return (
    <div className="w-full bg-gray-800 py-40 px-10 flex justify-between">
      <div className="h-full flex items-center justify-center w-full">
        <Image src="/logo-full-inv.svg" width={480} height={120} alt="Logo full" />
      </div>
      <Divider orientation="vertical" flexItem variant="inset" sx={{background: "white"}} />
      <div className="w-full flex items-center justify-center flex-col gap-8">
        <p className="text-white text-center">© 2026 João Coelho.</p>
        <div className="">
          <SocialMediaBar size="small" />
        </div>
      </div>
    </div>
  );
};
