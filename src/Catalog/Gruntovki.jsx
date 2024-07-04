import "../App.css"
import { Link } from "react-router-dom"
const Gruntovki = () => {
    return(
        <div>
            <h1>Грунтовки</h1>
            <button>
                <Link to={"/akril"}>Грунтовка акриловая глубокого проникновения</Link>
            </button>
            <button>
                <Link to={"/betono"}>Грунтовка бетонконтакт</Link>
            </button>
        </div>
    )
}

export default Gruntovki