import "../App.css"
import { Link } from "react-router-dom"
const Object = () => {
    return(
        <div>
            <h1>Наши объекты</h1>
            <button>
                <Link to={"/belgorod"}>Белгород</Link>
            </button>
            <button>
                <Link to={"/bryansk"}>Брянск</Link>
            </button>
            <button>
                <Link to={"/voronezh"}>Воронеж</Link>
            </button>
            <button>
                <Link to={"/kursk"}>Курск</Link>
            </button>     
            <button>      
                <Link to={"/moscow"}>Москва</Link>
            </button>
            <button>      
                <Link to={"/eagle"}>Орёл</Link>
            </button>
            <button>
                <Link to={"/taganrog"}>Таганрог</Link>
            </button>
            <button>
                <Link to={"/tambov"}>Тамбов</Link>
            </button>
        </div>
    )
}

export default Object