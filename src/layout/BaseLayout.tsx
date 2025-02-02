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
        <Sidebar sidebarOpen={state.sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="w-full h-[100%] overflow-y-scroll no-scrollbar">
            <Navbar toggleSidebar={toggleSidebar} />
            {children}
        </div>
    </div>);
}

export default BaseLayout;