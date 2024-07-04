import { Link } from "react-router-dom"
import "../App.css"
const Rastvor = () => {
    return(
        <div>
            <h1>Кладочный раствор</h1>
            <button>
                <Link to={"/summer"}>Клея блок ЛЕТО</Link>
            </button>
            <button>
                <Link to={"/winter"}>Клей блок ЗИМА</Link>
            </button>
            <button>
                <Link to={"/kladRastvor"}>Кладочный раствор</Link>
            </button>
        </div>
    )
}

export default Rastvor