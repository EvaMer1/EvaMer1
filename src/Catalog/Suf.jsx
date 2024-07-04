import "../App.css"
import { Link } from "react-router-dom"
const Suf = () => {
    return(
        <div>
            <h1>Системы утепления фасадов</h1>
            <button>
                <Link to={"/koroed"}>Штукатурка декоративная КОРОЕД</Link>
            </button>
            <button>
                <Link to={"/rocks"}>Штукатурка Декоративная Камешковая</Link>
            </button>
            <button>
                <Link to={"/warmglue"}>Клей-шпаклевка ТЕПЛОКЛЕЙ</Link>
            </button>
        </div>
    )
}

export default Suf