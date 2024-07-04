import { Link } from "react-router-dom";

import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="fds" style={{
          position:"absolute",
          left:'2%',
          height:"0px"
        }}/>
        </div>
        <div style={{
          display:"flex",
          flex:"auto",
          left:"10px"
        }}>
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
        <Link to={"about"}>O компании</Link>
      </button>
      </div>
      </div>
  );
};

export default Header;  