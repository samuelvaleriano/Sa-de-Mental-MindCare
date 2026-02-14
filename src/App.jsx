import { useState } from 'react'
import './styles.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePages from './pages/HomePages/HomePages.jsx';
import DuvidasPage from './pages/DuvidasPages/Duvidas.jsx';
import AgendamentosPages from './pages/AgendamentosPages/Agendamentos.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "Duvidas",
    element: <DuvidasPage />,
  },
   {
    path: "agendamentos",
    element: <AgendamentosPages />,
  },

]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
