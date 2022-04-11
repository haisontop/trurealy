import React, { FC, Suspense, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/public";
const App: FC = () => {
    return (
        <Suspense fallback={"Loading ..."}>
            <BrowserRouter>
                <PublicRoutes />
            </BrowserRouter>
        </Suspense>
    );
};

export default memo(App);
