import { Outlet } from "react-router"

const Layout = () => {
    return (
        <>
            <header />
            <main>
                <Outlet />
            </main>
            <aside />
            <footer />
        </>
    );
};

export default Layout;