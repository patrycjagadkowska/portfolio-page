import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />,
        <Route path='about' element={<AboutPage />} />,
        <Route path='portfolio' element={<PortfolioPage />} />,
        <Route path='contact' element={<ContactPage />} />
    </Route>
  ));
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
