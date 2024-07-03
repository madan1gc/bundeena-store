import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-wrapper">
                    <div className="logo">
                        <h1>Bundeena Store</h1>
                    </div>
                    <ul className='nav-menu'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/offers">Offers</Link>
                        </li>
                        <li>
                            <Link to="">Services</Link>
                        </li>
                        <li>
                            <Link to="">Contact</Link>
                        </li>
                    </ul>
                    <div className="button-wrapper">
                        <li>
                            <Link className='button secondary-button' to="">Contact</Link>
                        </li>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header