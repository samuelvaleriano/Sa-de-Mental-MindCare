import { useState } from 'react'
import './styles.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePages from './pages/HomePages/HomePages.jsx';
import DuvidasPage from './pages/DuvidasPages/Duvidas.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "Duvidas",
    element: <DuvidasPage />,
  },

]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
