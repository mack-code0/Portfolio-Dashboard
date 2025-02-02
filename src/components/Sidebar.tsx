import { useEffect, useState } from "react";
import { LuArrowLeftRight, LuBriefcase, LuCalendar, LuChartBarBig, LuChevronDown, LuChevronRight, LuChevronsUp, LuChevronsUpDown, LuChevronUp, LuCircleGauge, LuCrown, LuGlobe, LuMail, LuNotebook, LuStickyNote, LuWallet } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";
import { LuScanSearch } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
import { TbBrackets } from "react-icons/tb";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import { Avatar } from "antd";

interface State {
    activeTab: string
}

const Sidebar: React.FC<{ sidebarOpen: boolean, toggleSidebar: () => void }> = ({ sidebarOpen, toggleSidebar }) => {
    const [state, setState] = useState<State>({
        activeTab: "Overview"
    })

    const toggleActiveTab = (val: string) => setState(prev => ({ ...prev, activeTab: val }))


    return (<>
        <div role="button" onClick={toggleSidebar} className={`${!sidebarOpen && "hidden"} xl:hidden fixed h-screen w-screen bg-[#000]/[.8] top-0 right-0 z-10`} />
        <div className={`${!sidebarOpen && "left-[-300px] xl:left-0"} w-[300px] h-[100%] bg-primBg border-r border-secBg overflow-x-hidden overflow-y-scroll no-scrollbar fixed xl:relative z-10`}>
            <div className="flex items-center p-4 h-[75px] border-b border-secBg">
                <button className="bg-secBg p-3 rounded mr-3 bg-secBg">
                    <LuWallet className="text-greenBg text-lg" />
                </button>
                <h6 className="text-primText text-[14px]">Main portfolio</h6>

                <button className="ml-auto">
                    <LuChevronsUpDown className="text-lg text-primText" />
                </button>
            </div>

            <div className="p-4">
                <div className="mb-9">
                    <h6 className="text-primText/60 text-[12px] mb-2">Main</h6>
                    <div className="space-y-1">
                        <Button
                            icon={<RiDashboardLine />}
                            state={state}
                            tabName="Overview"
                            toggleActiveTab={toggleActiveTab}
                        />

                        <Button
                            icon={<LuArrowLeftRight />}
                            state={state}
                            tabName="Operations"
                            toggleActiveTab={toggleActiveTab}
                            hasDropdown
                        />

                        <Button
                            icon={<LuBriefcase />}
                            state={state}
                            tabName="Management"
                            toggleActiveTab={toggleActiveTab}
                            hasDropdown
                        />
                    </div>
                </div>

                <div className="mb-9">
                    <h6 className="text-primText/60 text-[12px] mb-2 flex w-full justify-between">Tools
                        <button className="ml-auto">
                            <LuChevronUp className="text-lg text-primText/60" />
                        </button>
                    </h6>
                    <div className="space-y-1">
                        {[
                            { label: "Company Scanner", icon: <LuScanSearch /> },
                            { label: "Heatmaps", icon: <AiOutlineFire /> },
                            { label: "Quotes", icon: <TbBrackets /> },
                            { label: "Fund Ranking", icon: <LuCrown /> },
                            { label: "Catalyst bond analysis", icon: <LuChartBarBig /> },
                            { label: "AT signals", icon: <MdOutlineCandlestickChart /> },
                            { label: "Dividend calendar", icon: <LuCalendar /> },
                            { label: "Public portfolios", icon: <LuGlobe /> },
                            { label: "Reports", icon: <LuStickyNote /> }].map((obj, idx) =>
                                <Button key={idx}
                                    icon={obj.icon}
                                    state={state}
                                    tabName={obj.label}
                                    toggleActiveTab={toggleActiveTab}
                                />)}
                    </div>
                </div>

                <div className="mb-9">
                    <h6 className="text-primText/60 text-[12px] mb-2 flex w-full justify-between">Analytics
                        <button className="ml-auto">
                            <LuChevronUp className="text-lg text-primText/60" />
                        </button>
                    </h6>
                    <div className="space-y-1">
                        {[
                            { label: "Charts", icon: <FaRegChartBar /> },
                            { label: "Benchmarks", icon: <PiMedal /> },
                            { label: "Risks Analysis", icon: <LuCircleGauge /> }].map((obj, idx) =>
                                <Button key={idx}
                                    icon={obj.icon}
                                    state={state}
                                    tabName={obj.label}
                                    toggleActiveTab={toggleActiveTab}
                                />)}
                    </div>
                </div>

                <div className="mb-9">
                    <h6 className="text-primText/60 text-[12px] mb-2 flex w-full justify-between">Support</h6>
                    <div className="space-y-1">
                        <Button
                            icon={<LuMail />}
                            state={state}
                            tabName="Contact Us"
                            toggleActiveTab={toggleActiveTab}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-primBg min-h-[50px] p-[12px] flex items-center justify-between border-t border-secBg w-full">
                <div className="flex items-center">
                    <div className="mr-2">
                        <Avatar src="https://i.pravatar.cc/150?u=fake@pravatar.com" shape="square" size={35} />
                    </div>
                    <div>
                        <h6 className="truncate w-[100px] font-[500] text-primText/80 text-[12px]">Martin Blechacz</h6>
                        <p className="truncate w-[100px] text-primText/70 text-[10px]">martin.blechacz@gmail.com</p>
                    </div>
                </div>
                <div>
                    <LuChevronRight className="text-xl text-primText/80" />
                </div>
            </div>

        </div>
    </>);
}

export default Sidebar;

const Button: React.FC<{ hasDropdown?: boolean, toggleActiveTab: (val: string) => void, state: State, icon: React.ReactNode, tabName: string }> = ({ toggleActiveTab, state, icon, tabName, hasDropdown }) => {
    const [buttonState, setButtonState] = useState({
        isOpen: false
    })

    const toggleButtonOpen = () => setButtonState(prev => ({ ...prev, isOpen: !prev.isOpen }))

    const handleButtonClick = () => {
        if (hasDropdown) {
            toggleButtonOpen()
            toggleActiveTab(tabName)
        } else {
            toggleActiveTab(tabName)
        }
    }

    return <button
        title={tabName}
        onClick={handleButtonClick}
        className={`${state.activeTab === tabName ? "bg-secBg text-primText" : "text-primText/80"} w-full flex items-center text-[14px] p-2 rounded-[8px]`}>
        <div className={`${state.activeTab === tabName ? "text-greenBg" : ""} text-xl mr-2`}>
            {icon}
        </div>

        <span className="truncate">
            {tabName}
        </span>

        {hasDropdown
            && <>
                {buttonState.isOpen
                    ? <LuChevronDown className="text-xl ml-auto" />
                    : <LuChevronRight className="text-xl ml-auto" />}
            </>}
    </button>
}