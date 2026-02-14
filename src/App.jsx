import { useState } from 'react'
import './styles.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from './pages/HomePages/HomePages.jsx';
import DuvidasPage from './pages/DuvidasPages/Duvidas.jsx';
<<<<<<< HEAD
import LoginPages from './pages/LoginPages/LoginPages.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import { ToastContainer } from 'react-toastify';
=======
import AgendamentosPages from './pages/AgendamentosPages/Agendamentos.jsx';
>>>>>>> d13b2c8aa63d687786704f8223e5e7d1f230717e


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPages />,
  },
  {
    path: "/Home",
    element: <HomePages />,
  },
  {
    path: "Duvidas",
    element: <DuvidasPage />,
  },
<<<<<<< HEAD
  {
    path: "Cadastro",
    element: <Cadastro />,
  }
=======
   {
    path: "agendamentos",
    element: <AgendamentosPages />,
  },
>>>>>>> d13b2c8aa63d687786704f8223e5e7d1f230717e

]);
export default function Routes() {
  return <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>;
}
