import "../App.css"
import { Link } from "react-router-dom"
const Floors = () => {
    return(
        <div>
            <h1>Наливные полы</h1>
            <button>
                <Link to={"samonivelir"}>Наливной пол УНИВЕРСАЛЬНЫЙ САМОНИВЕЛИР</Link>
            </button>
            <button>
                <Link to={"nivelir"}>Гипсовый пол НИВЕЛИР</Link>
            </button>
        </div>
    )
}

export default Floors