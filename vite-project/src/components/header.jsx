import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <button>
        <Link to={"home"}>Главная</Link>
      </button>
      <button>
        <Link to={"catalog"}>Каталог</Link>
      </button>
      <button>
        <Link to={"contact"}>Контакты</Link>
      </button>
      <button>
        <Link to={"buy"}>Где купить</Link>
      </button>
      <button>
        <Link to={"object"}>Наши объекты</Link>
      </button>
      <button>
        <Link to={"about"}>О компании</Link>
      </button>
    </div>
  );
};

export default Header;  