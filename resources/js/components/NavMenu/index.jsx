import { Icon } from "../../components"

const NavMenu = () => {
    return (
        <ul className='nav-menu'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/offers">Offers</a>
            </li>
            <li className='has-submenu' >
                <a className='has-icon' href="#">What's in store <Icon icon="downArrow" /> </a>
                <ul className='submenu'>
                    <li><a href="/allstore">All </a></li>
                    <li><a href="#">Sandwiches & Wraps</a></li>
                    <li><a href="#">Coffee</a></li>
                    <li><a href="#">Bakery</a></li>
                    <li><a href="#">Hot Food</a></li>
                </ul>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="#">Fuels</a>
            </li>
            <li>
                <a href="#">News & Events</a>
            </li>
            <li>
                <a href="#">Partners</a>
            </li>
        </ul>
    )
}

export default NavMenu