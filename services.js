import { Link } from "react-router-dom";
const Producto = () => {
    return <nav>
        <ul>
            <li>
                <Link to="/services/1">Plan Básico 1</Link>
            </li>
            <li>
                <Link to="/services/2">Plan Intermedio 2</Link>
            </li>
            <li>
                <Link to="/services/3">Servicio Premium VIP calidad 3</Link>
            </li>
        </ul>
    </nav>;
}
export default services;