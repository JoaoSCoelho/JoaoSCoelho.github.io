import clsx from "clsx";
import Link from "next/link";

export type BaselinedLinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

export const BaselinedLink = ({children, href, active}: BaselinedLinkProps) => {
  return (
    <div className="relative flex flex-col text-center w-full">
      <Link
        href={href}
        className={clsx(active ? "text-blue-400" : "text-gray-500 hover:text-gray-900", "text-sm")}
      >
        {children}
      </Link>
    </div>
  );
};
