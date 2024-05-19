import ThemeToggler from "@/app/components/ThemeToggler";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center p-4 border-t mt-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <ThemeToggler />
        <ul className="flex gap-2">
          <li>
            <Link href="https://github.com/kulembetov">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/kulembetov">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/arturkulembetov">
              <FaTwitter />
            </Link>
          </li>
        </ul>
        <p className="text-sm">
          © 2024 Artur Kulembetov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
