import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Contact from "../pages/Contact"
import App from "../App"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "home",element:<Home/>},
        { path: "catalog",element:<Catalog/>},
        {path: "contact",element:<Contact/>}
    ]
  },
])