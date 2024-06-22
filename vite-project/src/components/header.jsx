import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <button>
        <Link to={"home"}>Home</Link>
      </button>
      <button>
        <Link to={"catalog"}>Catalog</Link>
      </button>
      <button>
        <Link to={"contact"}>Contact</Link>
      </button>
    </div>
  );
};

export default Header;