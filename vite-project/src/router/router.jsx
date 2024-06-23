import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Contact from "../pages/Contact"
import Buy from "../pages/Buy"
import Object from "../pages/Object"
import About from "../pages/About"
import Glue from "../pages/Glue"
import App from "../App"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "home",element:<Home/>},
        { path: "catalog",element:<Catalog/>},
        { path: "contact",element:<Contact/>},
        { path:"buy",element:<Buy/>},
        {path:"object",element:<Object/>},
        {path:"about",element:<About/>},
        {path:"glue",element:<Glue/>},
    ]
  },
])