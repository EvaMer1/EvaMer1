import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Contact from "../pages/Contact"
import Buy from "../pages/Buy"
import Object from "../pages/Object"
import About from "../pages/About"



import Glue from "../Catalog/Glue"
import Shtukaturki from "../Catalog/Shtukaturki"
import Shpaklevki from "../Catalog/Shpaklevki"
import Suf from "../Catalog/Suf"
import Floors from "../Catalog/Floors"
import Styazhki from "../Catalog/Styazhki"
import App from "../App"
import Rastvor from "../Catalog/Rastvor"
import Gruntovki from "../Catalog/Gruntovki"
import Paints from "../Catalog/Paints"



import Belgorod from "../Objects/Belgorod"
import Bryansk from "../Objects/Bryansk"
import Voronezh from "../Objects/Voronezh"
import Kursk from "../Objects/Kursk"
import Moscow from "../Objects/Moscow"
import Eagle from "../Objects/Eagle"
import Taganrog from "../Objects/Taganrog"
import Tambov from "../Objects/Tambov"




import Start from "../glues/start"
import Interior from "../glues/interior"
import Plus from "../glues/plus"
import Plusfront from "../glues/plusfront"
import Granite from "../glues/granite"
import Warmglue from "../glues/warmglue"
import Montage from "../glues/montage"
import Summer from "../glues/summer"
import Winter from "../glues/winter"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path:"home",element:<Home/>},
        { path:"catalog",element:<Catalog/>},
        { path:"contact",element:<Contact/>},
        { path:"buy",element:<Buy/>},
        { path:"object",element:<Object/>},
        { path:"about",element:<About/>},



        { path:"glue",element:<Glue/>},
        { path:"putty",element:<Shpaklevki/>},
        { path:"plasters",element:<Shtukaturki/>},
        { path:"suf",element:<Suf/>},
        { path:"floors",element:<Floors/>},
        { path:"screeds",element:<Styazhki/>},
        { path:"fluid",element:<Rastvor/>},
        { path:"primers",element:<Gruntovki/>},
        { path:"paints",element:<Paints/>},



        { path:"start",element:<Start/>},
        { path:"interior",element:<Interior/>},
        { path:"plus",element:<Plus/>},
        { path:"plusfront",element:<Plusfront/>},
        { path:"granite",element:<Granite/>},
        { path:"warmglue",element:<Warmglue/>},
        { path:"montage",element:<Montage/>},
        { path:"summer",element:<Summer/>},
        { path:"winter",element:<Winter/>},



        { path:"belgorod",element:<Belgorod/>},
        { path:"bryansk",element:<Bryansk/>},
        { path:"voronezh",element:<Voronezh/>},
        { path:"kursk",element:<Kursk/>},
        { path:"moscow",element:<Moscow/>},
        { path:"eagle",element:<Eagle/>},
        { path:"taganrog",element:<Taganrog/>},
        { path:"tambov",element:<Tambov/>},
    ]
  },
])