import "../App.css"
import { Link } from "react-router-dom"
const Shpaklevki = () => {
    return(
        <div>
            <h1>Шпаклевки</h1>
             <div>
                <button>
                    <Link to={"/finish"}>Шпаклевка полимерная ФИНИШ белая LR+</Link>
                </button>
                <button>
                    <Link to={"/atlas"}>Шпаклевка гипсовая безусадочная белая ATLAS</Link>
                </button>
                <button>
                    <Link to={"/saten"}>Шпаклевка гипсовая белая SATEN</Link>
                </button>
                <button>
                    <Link to={"/vatman"}>Шпаклевка универсальная VATMAN</Link>
                </button>
                <button>
                    <Link to={"/white"}>Шпаклевка фасадная цементная белая</Link>
                </button>
                <button>
                    <Link to={"/grey"}>Шпаклевка фасадная цементная серая</Link>
                </button>
            </div>
        </div>
    )
}

export default Shpaklevki