import "../App.css"
import { Link } from "react-router-dom"
const Shtukaturki = () => {
    return(
        <div>
            <h1>Штукатурки</h1>
            <div>
                <button>
                    <Link to={"/master"}>Штукатурка гипсовая MASTER</Link>
                </button>
                <button>
                    <Link to={"/profi"}>Штукатурка гипсовая PROFI</Link>
                </button>
                <button>
                    <Link to={"/startst"}>Штукатурка гипсовая START</Link>
                </button>
                <button>
                    <Link to={"/koroed"}>Штукатурка декоративная КОРОЕД</Link>
                </button>
                <button>
                    <Link to={"/light"}>Штукатурка цементная облегченная LIGHT</Link>
                </button>
                <button>
                    <Link to={"/rocks"}>Штукатурка Декоративная Камешковая</Link>
                </button>
                <button>
                    <Link to={"/effect"}>Штукатурка выравнивающая полимерцементная ЭФФЕКТ</Link>
                </button>
                <button>
                    <Link to={"/base"}>Штукатурка грунтовочная цементная БАЗОВАЯ</Link>
                </button>
            </div>
        </div>
    )
}

export default Shtukaturki