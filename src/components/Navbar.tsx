import { Input } from "antd";
import { LuBell, LuChevronRight } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { TbLayoutSidebar } from "react-icons/tb";
import styled from "styled-components";

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
    return (<div className="w-full flex flex-row items-center p-4 h-[75px] border-b border-secBg bg-primBg">
        <TbLayoutSidebar role="button" onClick={toggleSidebar} className="text-xl text-primText/80 mr-5" />
        <div className="space-x-2 flex items-center">
            <a className="font-[400] text-[14px] text-primText/80">Main portfolio</a>
            <LuChevronRight className="text-xl text-primText/80" />
            <a className="font-[400] text-[14px] text-primText">Overview</a>
        </div>

        <div className="ml-auto flex items-center space-x-2">
            <CustomInput
                placeholder="What are you looking for?"
                className="text-primText *:placeholder:text-[14px] *:placeholder:text-primText/80 !border !border-primText/10 !bg-primText/[.05] hidden xl:flex w-[250px] h-[40px]"
                prefix={<RiSearchLine className="icon text-xl text-primText/80" />} />

            <button className="h-[40px] w-[40px] flex items-center justify-center rounded-[4px] border border-primText/10 bg-primText/[.05]">
                <LuBell className="text-xl text-primText" />
            </button>
        </div>
    </div>);
}

const CustomInput = styled(Input)`
    
`

export default Navbar;