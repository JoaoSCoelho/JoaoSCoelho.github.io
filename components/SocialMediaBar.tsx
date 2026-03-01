import {MdEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import Link from "next/link";
import {Tooltip, Typography} from "@mui/material";
import toast from "react-hot-toast";

export type SocialMediaBarProps = {
  size?: "small" | "medium" | "large";
};

export const SocialMediaBar = ({size = "medium"}: SocialMediaBarProps) => {
  const sizeToPx = size === "small" ? 24 : size === "medium" ? 32 : 40;
  const sizeToTailwindPadding = size === "small" ? "p-3" : size === "medium" ? "p-4" : "p-5";

  return (
    <div className="flex gap-4">
      <Tooltip
        leaveDelay={500}
        title={
          <Typography
            fontSize={16}
            className="p-3 select-all"
            onClick={() => {
              navigator.clipboard.writeText("jv.joaocoelho@gmail.com");
              toast.success("Email copiado!");
            }}
          >
            jv.joaocoelho@gmail.com
          </Typography>
        }
        arrow
        placement="top"
        slotProps={{
          tooltip: {
            sx: {
              color: "var(--color-gray-700)",
              backgroundColor: "#ffff",
              borderRadius: "100px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 9px 15px",
            },
          },
          arrow: {
            style: {
              color: "#fff",
            },
          },
        }}
      >
        <Link
          href="mailto:jv.joaocoelho@gmail.com"
          aria-label="Email"
          className={`cursor-pointer rounded-full bg-white ${sizeToTailwindPadding} drop-shadow-xl hover:bg-blue-500  hover:text-white transition-transform hover:-translate-y-0.5`}
        >
          <MdEmail size={sizeToPx} />
        </Link>
      </Tooltip>
      <Tooltip
        leaveDelay={500}
        title={
          <Typography
            fontSize={16}
            className="p-3 select-all"
            onClick={() => {
              navigator.clipboard.writeText("github.com/joaoscoelho");
              toast.success("URL copiada!");
            }}
          >
            github.com/joaoscoelho
          </Typography>
        }
        arrow
        placement="top"
        slotProps={{
          tooltip: {
            sx: {
              color: "var(--color-gray-700)",
              backgroundColor: "#ffff",
              borderRadius: "100px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 9px 15px",
            },
          },
          arrow: {
            style: {
              color: "#fff",
            },
          },
        }}
      >
        <Link
          href="https://github.com/joaoscoelho"
          target="_blank"
          aria-label="GitHub"
          className={`cursor-pointer rounded-full bg-white ${sizeToTailwindPadding} drop-shadow-xl hover:bg-blue-500  hover:text-white transition-transform hover:-translate-y-0.5`}
        >
          <FaGithub size={sizeToPx} />
        </Link>
      </Tooltip>
      <Tooltip
        leaveDelay={500}
        title={
          <Typography
            fontSize={16}
            className="p-3 select-all"
            onClick={() => {
              navigator.clipboard.writeText("linkedin.com/in/joao-s-coelho");
              toast.success("URL copiada!");
            }}
          >
            linkedin.com/in/joao-s-coelho
          </Typography>
        }
        arrow
        placement="top"
        slotProps={{
          tooltip: {
            sx: {
              color: "var(--color-gray-700)",
              backgroundColor: "#ffff",
              borderRadius: "100px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 9px 15px",
            },
          },
          arrow: {
            style: {
              color: "#fff",
            },
          },
        }}
      >
        <Link
          href="https://www.linkedin.com/in/joao-s-coelho"
          target="_blank"
          aria-label="Linkedin"
          className={`cursor-pointer rounded-full bg-white ${sizeToTailwindPadding} drop-shadow-xl hover:bg-blue-500  hover:text-white transition-transform hover:-translate-y-0.5`}
        >
          <FaLinkedin size={sizeToPx} />
        </Link>
      </Tooltip>
    </div>
  );
};
