import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";
import {HeaderNav} from "./HeaderNav";

export function Header() {
  return (
    <>
      <div className="h-50 w-full fixed top-0 left-0 z-50  bg-linear-to-b from-background from-30% to-transparent to-60%">
        <div className="h-full w-full flex bg-[radial-gradient(at_50%_0,white_0%,transparent_74%)]">
          <header className="flex items-center justify-between px-8 h-20 py-4 w-full">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo-full.svg"
                alt="Logo do projeto"
                width={170}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <HeaderNav />

            <Button className="bg-blue-400 hover:bg-blue-500 text-white text-sm font-bold h-12 w-37.5 rounded-full shadow-lg shadow-blue-400/40 transition-all hover:-translate-y-0.5">
              CONTATO
            </Button>
          </header>
        </div>
      </div>
    </>
  );
}
