import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
// import ContactPage from "./pages/ContactPage";
// import PortfolioPage from "./pages/PortfolioPage";
// import AboutPage from "./pages/AboutPage";

const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "about", element: <Suspense><AboutPage /></Suspense> },
        { path: "portfolio", element: <Suspense><PortfolioPage /></Suspense> },
        { path: "contact", element: <Suspense><ContactPage /> </Suspense>},
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;