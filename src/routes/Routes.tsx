import BaseLayout from "layout/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  routeInterface, routeScreens } from "routes";


const childRoutes = (Layout: any, routes: Array<any>) =>
    routes.map(
        (
            { children, path, component: Component, name, breadcrumb }: routeInterface,
            index: number
        ) =>
            children ? (
                // Route item with children
                children.map(
                    (
                        { path, component: Component, name, breadcrumb }: routeInterface,
                        index: number
                    ) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout breadcrumb={breadcrumb}>
                                    <Component ComponentName={name} />
                                </Layout>
                            }
                        />
                    )
                )
            ) : (
                // Route item without children
                <Route
                    key={index}
                    path={path}
                    element={
                        <Layout breadcrumb={breadcrumb}>
                            <Component ComponentName={name} />
                        </Layout>
                    }
                />
            )
    );


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {childRoutes(BaseLayout, routeScreens)}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
