import { useState } from "react";
import { LuArrowLeftRight, LuBriefcase, LuChevronDown, LuChevronRight, LuChevronsUpDown, LuWallet } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";

interface State {
    activeTab: string
}

const Sidebar = () => {
    const [state, setState] = useState<State>({
        activeTab: "Overview"
    })

    const toggleActiveTab = (val: string) => setState(prev => ({ ...prev, activeTab: val }))

    return (<div className="w-[270px] h-screen bg-primBg overflow-y-scroll no-scrollbar">
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
                <h6 className="text-primText text-[12px] mb-2">Main</h6>
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
                <h6 className="text-primText text-[12px] mb-2">Tools</h6>
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
        </div>

    </div>);
}

export default Sidebar;

const Button: React.FC<{ hasDropdown?: boolean, toggleActiveTab: (val: string) => void, state: State, icon: React.ReactElement, tabName: string }> = ({ toggleActiveTab, state, icon, tabName, hasDropdown }) => {
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
        onClick={handleButtonClick}
        className={`${state.activeTab === tabName ? "bg-secBg text-primText" : "text-primText/80"} w-full flex items-center text-[14px] p-2 rounded-[8px]`}>
        <div className={`${state.activeTab === tabName ? "text-greenBg" : ""} text-xl mr-2`}>
            {icon}
        </div>

        {tabName}

        {hasDropdown
            && <>
                {buttonState.isOpen
                    ? <LuChevronDown className="text-xl ml-auto" />
                    : <LuChevronRight className="text-xl ml-auto" />}
            </>}
    </button>
}