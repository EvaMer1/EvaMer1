import "../App.css"
import { Link } from "react-router-dom"
const Paints = () => {
    return(
        <div>
            <h1>Краски</h1>
            <button>
                <Link to={"/roofUniv"}>Клея</Link>
            </button>
            <button>
                <Link to={"/interiorUniv"}>fjweo</Link>
            </button>
            <button>
                <Link to={"/waterproofUniv"}>ppfwepf</Link>
            </button>
            <button>
                <Link to={"/washingUniv"}>niwgerig</Link>
            </button>
            <button>
                <Link to={"/akrilUniv"}>feinfinf</Link>
            </button>
            <button>
                <Link to={"/roofProfi"}>ifowfhhufhufhhuf</Link>
            </button>
            <button>
                <Link to={"/interiorProfi"}>fjweo</Link>
            </button>
            <button>
                <Link to={"/waterproofProfi"}>ppfwepf</Link>
            </button>
            <button>
                <Link to={"/washingProfi"}>niwgerig</Link>
            </button>
            <button>
                <Link to={"/akrilProfi"}>feinfinf</Link>
            </button>
        </div>
    )
}

export default Paints