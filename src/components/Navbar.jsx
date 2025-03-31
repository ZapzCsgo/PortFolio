import logo from "../assets/zapzLogo.webp"
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flexs-shrink-0 items-center">
                <a href="/" arial-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://discordapp.com/users/612982073552142350"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord">
                        <FaDiscord style={{ color: 'white' }} />
                </a>
                <a href="https://github.com/ZapzCsgo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github">
                        <FaGithub style={{ color: 'white' }} />
                </a>
                <a href="https://www.linkedin.com/in/matteo-murru-775720274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin">
                        <FaLinkedin style={{ color: 'white' }} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar