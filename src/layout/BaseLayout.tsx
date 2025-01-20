import Sidebar from "components/Sidebar";

const BaseLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    return (<div>
        <Sidebar />
        {children}
    </div>);
}

export default BaseLayout;