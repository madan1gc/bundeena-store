import { Link } from 'react-router-dom';
import { Icon } from "../../components"

const NavMenu = () => {
    return (
        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/offers">Offers</Link>
            </li>
            <li className='has-submenu' >
                <Link className='has-icon' to="#">What's in store <Icon icon="downArrow" /> </Link>
                <ul className='submenu'>
                    <li><Link to="/allstore">All </Link></li>
                    <li><Link to="#">Sandwiches & Wraps</Link></li>
                    <li><Link to="#">Coffee</Link></li>
                    <li><Link to="#">Bakery</Link></li>
                    <li><Link to="#">Hot Food</Link></li>
                </ul>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="#">Fuels</Link>
            </li>
            <li>
                <Link to="#">News & Events</Link>
            </li>
            <li>
                <Link to="#">Partners</Link>
            </li>
        </ul>
    )
}

export default NavMenu