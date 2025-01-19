import Dashboard from "pages/Dashboard";

export interface routeInterface {
    path: string;
    name: string;
    header?: string;
    exact?: boolean;
    component?: any;
    breadcrumb?: Record<string, string>[];
    children?: Array<routeInterface>;
}

const routes: routeInterface = {
    path: "/",
    name: "Dashboard",
    children: [
        {
            path: "/",
            name: "Dashboard",
            header: "Dashboard",
            component: Dashboard,
        },
    ]
}

export const routeScreens: Array<routeInterface> = [routes];
