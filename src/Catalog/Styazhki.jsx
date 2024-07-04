import "../App.css"
import { Link } from "react-router-dom"
const Styazhki = () => {
    return(
        <div>
            <h1>Стяжки</h1>
            <button>
                <Link to={"/floor"}>Стяжка для пола</Link>
            </button>
            <button>
                <Link to={"/lightSt"}>Стяжка LIGHT</Link>
            </button>
        </div>
    )
}

export default Styazhki