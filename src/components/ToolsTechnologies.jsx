import { SiCplusplus, SiC } from "react-icons/si";
import binaryNinjaLogo from "../assets/binary-ninja-logo.webp";
import cheatEngineLogo from "../assets/cheat_engine.webp";
import x64dbgLogo from "../assets/x64dbg_logo.webp";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import useInView from "../hooks/useInView";

const TOOLS = [
    { key: "cpp", label: "C++", render: () => <SiCplusplus className="text-6xl text-accent" aria-hidden="true" /> },
    { key: "c", label: "C", render: () => <SiC className="text-6xl text-accent" aria-hidden="true" /> },
    { key: "binary-ninja", label: "Binary Ninja", render: () => <img src={binaryNinjaLogo} alt="" className="h-16 w-auto" /> },
    { key: "cheat-engine", label: "Cheat Engine", render: () => <img src={cheatEngineLogo} alt="" className="h-16 w-auto" /> },
    { key: "x64dbg", label: "x64dbg", render: () => <img src={x64dbgLogo} alt="" className="h-16 w-auto" /> },
];

const ToolsTechnologies = () => {
    const [ref, isInView] = useInView();

    return (
        <div className="pb-24">
            <SectionHeading align="center">Tools &amp; Technologies</SectionHeading>
            <div ref={ref} className="flex flex-wrap items-stretch justify-center gap-4">
                {TOOLS.map((tool, index) => (
                    <Card
                        key={tool.key}
                        hoverable
                        padding="md"
                        className={`flex w-32 flex-col items-center justify-center gap-3 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                        style={{ animationDelay: isInView ? `${index * 60}ms` : undefined }}
                    >
                        {tool.render()}
                        <span className="text-sm text-gray-300">{tool.label}</span>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ToolsTechnologies;