import logo from "../assets/zapzLogo.webp";
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import IconLink from "./ui/IconLink";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 -mx-8 flex items-center justify-between border-b border-white/5 bg-black/60 px-8 py-6 backdrop-blur-md">
            <div className="flex flex-shrink-0 items-center">
                <a
                    href="/"
                    aria-label="Home"
                    className="flex items-center gap-2 rounded-sm transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    <img
                        src={logo}
                        className="mx-2"
                        width={50}
                        height={33}
                        alt="Logo"
                    />
                    <div className="flex items-center text-sm text-white">
                        <FaHome className="mr-1" aria-hidden="true" />
                        <span>Home</span>
                    </div>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4">
                <IconLink href="https://github.com/ZapzCsgo" icon={FaGithub} label="Github" size="lg" />
                <IconLink href="https://www.linkedin.com/in/matteo-murru-775720274/" icon={FaLinkedin} label="Linkedin" size="lg" />
            </div>
        </nav>
    );
};

export default Navbar;