import { Outlet } from "react-router"

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <aside />
            <Footer />
        </>
    );
};

export default Layout;