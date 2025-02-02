import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useEffect, useState } from "react";

const BaseLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [state, setState] = useState({
        sidebarOpen: true
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setState(prev => ({ ...prev, sidebarOpen: false }));
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }))

    return (<div className="flex w-full h-screen">
        {/* Sidebar - Fixed Height, No Scroll */}
        <Sidebar sidebarOpen={state.sidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <Navbar toggleSidebar={toggleSidebar} />
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
                {children}
            </div>
        </div>
    </div>);
}

export default BaseLayout;