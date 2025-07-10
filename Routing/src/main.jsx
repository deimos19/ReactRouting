import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/global.css'

import UserRoot from './root/UserRoot';
import HomePage from './pages/HomePage';
import User from './pages/User';
import UserDetailPage from './pages/UserDetailPage ';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot/>,
    children: [
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"/user",
        element:<User/>
      },
      {
        path:"/users/:id",
        element:<UserDetailPage/>
      },
      {
        path:"/about",
        element:<About/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
