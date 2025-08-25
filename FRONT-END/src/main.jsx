import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from "./routes/HomePage.jsx"
import PostListPage from "./routes/PostListPage.jsx"
import LoginPage from './routes/LoginPage.jsx'
import WritePage from './routes/writePage.jsx'
import RegisterPage from "./routes/RegisterPage.jsx"
import SinglePostPage from "./routes/SinglePostPage.jsx"
import {createBrowserRouter , RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path : "/",
    element : (<HomePage/>)
  },
  {
    path : "/posts",
    element : (<PostListPage/>)
  },
  {
    path : "/:slug",
    element : (<SinglePostPage/>)
  },
  {
    path : "/write-post",
    element : (<WritePage/>)
  },
  {
    path : "/login",
    element : (<LoginPage/>)
  },
  {
    path : "/register",
    element : (<RegisterPage/>)
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
