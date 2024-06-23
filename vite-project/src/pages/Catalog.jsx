import "../App.css"
import { Link } from "react-router-dom";



const Catalog = () => {
    return(
        <div>
            <h1>Каталог продукции</h1>
            <button>
                <Link to={"/glue"}>Клея</Link>
            </button>
            <button>
                <Link to={"/putty"}>Шпаклевки</Link>
            </button>
        </div>
    )
}


export default Catalog