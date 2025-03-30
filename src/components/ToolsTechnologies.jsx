import { SiCplusplus, SiC } from "react-icons/si";
import binaryNinjaLogo from "../assets/binary-ninja-logo.webp";
import cheatEngineLogo from "../assets/cheat_engine.webp";
import x64dbgLogo from "../assets/x64dbg_logo.webp";

const ToolsTechnologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Tools & Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <SiCplusplus className="text-7xl text-blue-500" />
                </div>
                <div>
                    <SiC className="text-7xl text-blue-500" />
                </div>
                <div className="flex items-center justify-center">
                    <img 
                        src={binaryNinjaLogo}
                        alt="Binary Ninja"
                        className="h-20 w-auto" 
                    />
                </div>
                <div className="flex items-center justify-center">
                    <img 
                        src={cheatEngineLogo}
                        alt="Cheat Engine"
                        className="h-20 w-auto" 
                    />
                </div>
                <div className="flex items-center justify-center">
                    <img 
                        src={x64dbgLogo}
                        alt="x64dbg"
                        className="h-20 w-auto" 
                    />
                </div>
            </div>
        </div>
    );
}

export default ToolsTechnologies;