import "../App.css"
import { Link } from "react-router-dom"
const Glue = () => {
    return(
        <div>
            <h1>Клея</h1>
            <div>
             <button>
                <Link to={"/start"}>Клей плиточный START</Link>
            </button>
            <button>
                <Link to={"/interior"}>Клей плиточный ИНТЕРЬЕР</Link>
            </button>
            <button>
                <Link to={"/plus"}>Клей плиточный ПЛЮС</Link>
            </button>
            <button>
                <Link to={"/granite"}>Клей плиточный гранит</Link>
            </button>
            <button>
                <Link to={"/plusfront"}>Штукатурно-клеевая смесь ПЛЮС ФАСАД</Link>
            </button>
            <button>
                <Link to={"/warmglue"}>Клей-шпаклевка ТЕПЛОКЛЕЙ</Link>
            </button>
            <button>
                <Link to={"/montage"}>Клей-шпаклевка МОНТАЖ</Link>
            </button>
            <button>
                <Link to={"/summer"}>Клей блок ЛЕТО</Link>
            </button>
            <button>
                <Link to={"/winter"}>Клей блок ЗИМА</Link>
            </button>
            <button>
                <Link to={"/standart"}>Клей плиточный СТАНДАРТ</Link>
            </button>
            </div>
        </div>
    )
}

export default Glue