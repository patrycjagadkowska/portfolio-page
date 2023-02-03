import { Outlet } from "react-router"

import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <aside />
            <footer />
        </>
    );
};

export default Layout;