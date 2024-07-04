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




import Finish from "../Shpaklevki/Finish"
import Atlas from "../Shpaklevki/Atlas"
import Saten from "../Shpaklevki/Saten"
import Vatman from "../Shpaklevki/Vatman"
import White from "../Shpaklevki/White"
import Grey from "../Shpaklevki/Grey"




import Master from "../Shtukaturki/Master"
import Profi from "../Shtukaturki/Profi"
import Light from "../Shtukaturki/Light"
import StartSt from "../Shtukaturki/StartSt"
import Koroed from "../Shtukaturki/Koroed"
import Rocks from "../Shtukaturki/Rocks"
import Effect from "../Shtukaturki/Effect"
import Base from "../Shtukaturki/Base"




import Samonivelir from "../Floors/samonivelir"
import Nivelir from "../Floors/nivelir"



import Floor from "../Styazhki/floor"
import LightSt from "../Styazhki/LightSt"


import KladRastvor from "../KladRastvor"
import Akril from "../gruntovki/Akril"
import Betono from "../gruntovki/Betono"


import RoofUniv from "../paints/roofUniv"


import InteriorUniv from "../paints/interiorUniv"
import Waterproof from "../paints/waterproofUniv"
import WashingUniv from "../paints/washingUniv"
import AkrilUniv from "../paints/akrilUniv"
import RoofProfi from "../paints/roofProfi"
import interiorProfi from "../paints/interiorProfi"
import WaterproofProfi from "../paints/waterproofProfi"
import WashingProfi from "../paints/washingProfi"
import AkrilProfi from "../paints/akrilProfi"
import Standard from "../glues/standard"


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
        { path:"standart",element:<Standard/>},


        { path:"finish",element:<Finish/>},
        { path:"atlas",element:<Atlas/>},
        { path:"saten",element:<Saten/>},
        { path:"vatman",element:<Vatman/>},
        { path:"white",element:<White/>},
        { path:"grey",element:<Grey/>},





        { path:"master",element:<Master/>},
        { path:"profi",element:<Profi/>},
        { path:"light",element:<Light/>},
        { path:"startst",element:<StartSt/>},
        { path:"koroed",element:<Koroed/>},
        { path:"rocks",element:<Rocks/>},
        { path:"effect",element:<Effect/>},
        { path:"base",element:<Base/>},



        { path:"samonivelir",element:<Samonivelir/>},
        { path:"nivelir",element:<Nivelir/>},


        { path:"floor",element:<Floor/>},
        { path:"lightSt",element:<LightSt/>},


        { path:"kladRastvor",element:<KladRastvor/>},


        { path:"akril",element:<Akril/>},
        { path:"betono",element:<Betono/>},


        { path:"roofUniv",element:<RoofUniv/>},
        { path:"interiorUniv",element:<InteriorUniv/>},
        { path:"waterproofUniv",element:<Waterproof/>},
        { path:"washingUniv",element:<WashingUniv/>},
        { path:"akrilUniv",element:<AkrilUniv/>},
        { path:"RoofProfi",element:<RoofProfi/>},
        { path:"roofProfi",element:<RoofProfi/>},
        { path:"interiorProfi",element:<interiorProfi/>},
        { path:"waterproofProfi",element:<WaterproofProfi/>},
        { path:"washingProfi",element:<WashingProfi/>},
        { path:"akrilProfi",element:<AkrilProfi/>},
        





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