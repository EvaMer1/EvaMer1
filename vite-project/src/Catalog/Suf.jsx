import "../App.css"
import { Link } from "react-router-dom"
const Suf = () => {
    return(
        <div>
            <h1>Системы утепления фасадов</h1>
            <button>
                <Link to={"/glue"}>Клея</Link>
            </button>
            <button>
                <Link to={"/putty"}>Шпаклевки</Link>
            </button>
            <button>
                <Link to={"/plasters"}>Штукатурки</Link>
            </button>
            <button>
                <Link to={"/suf"}>Системы утепления фасадов</Link>
            </button>
            <button>
                <Link to={"/floors"}>Наливные полы</Link>
            </button>
            <button>
                <Link to={"/screeds"}>Стяжки</Link>
            </button>
            <button>
                <Link to={"/fluid"}>Кладочный раствор</Link>
            </button>
            <button>
                <Link to={"/primers"}>Грунтовки</Link>
            </button>
            <button>
                <Link to={"/paints"}>Краски</Link>
            </button>
        </div>
    )
}

export default Suf