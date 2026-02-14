import { useState } from 'react'
import './styles.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from './pages/HomePages/HomePages.jsx';
import DuvidasPage from './pages/DuvidasPages/Duvidas.jsx';
import LoginPages from './pages/LoginPages/LoginPages.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import { ToastContainer } from 'react-toastify';
import AgendamentosPages from './pages/AgendamentosPages/Agendamentos.jsx';



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

  {
    path: "Cadastro",
    element: <Cadastro />,
  },
   {
    path: "agendamentos",
    element: <AgendamentosPages />,
  },


]);
export default function Routes() {
  return <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>;
}
