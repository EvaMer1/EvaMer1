import "../App.css"
import { Link } from "react-router-dom"
const Glue = () => {
    return(
        <div>
            <div>
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
            </div>
        </div>
    )
}

export default Glue