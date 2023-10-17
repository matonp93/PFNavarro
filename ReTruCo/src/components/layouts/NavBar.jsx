
import CartWidget from "../common/CartWidget";
import '../layouts/NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
    <Link to="/">Inicio</Link>
    <div className="Categories">
    <Link to={'/category/Celular'} className={({isActive})=>isActive? 'ActiveOption':Option}>Celulares</Link>
    <Link to={'/category/Ropa'} className={({isActive})=>isActive? 'ActiveOption':Option}>Ropa</Link>
    <Link to={'/category/Muebles'} className={({isActive})=>isActive? 'ActiveOption':Option}>Muebles</Link>
    </div>
    <CartWidget/>
    </nav>
  );
}

export default NavBar;
