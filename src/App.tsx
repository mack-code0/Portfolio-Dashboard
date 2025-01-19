import { ConfigProvider } from "antd";
import React, { lazy } from "react";
import { ThemeProvider } from "styled-components";

const AppRoutes = lazy(() => import('routes/Routes'));

function App() {
  return (
    <React.Suspense
      fallback={
        <div
          className="h-screen w-screen bg-white dark:bg-dark130 flex items-center justify-center"
        >
        </div>
      }
    >
        <ThemeProvider
          theme={
            {
              primary: "#B01E1E"
            }
          }>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#B01E1E",
                colorPrimaryActive: "#B01E1E",
              },
            }}
          >
            {/* <Testing /> */}
            <AppRoutes />
          </ConfigProvider>
        </ThemeProvider>
    </React.Suspense>
  );
}

export default App;
