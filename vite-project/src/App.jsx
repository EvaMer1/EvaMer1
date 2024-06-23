import Header from "./components/header.jsx";
import Catalog from "./pages/Catalog.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return ( 
    <div>
      <Header />
      <Outlet />
    </div>
   );
}
 
export default App;