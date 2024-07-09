import { Link } from 'react-router-dom';
import { NavMenu } from "../../components"


const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-wrapper">
                    <div className="logo">
                        <h1>
                            <Link to="/">Bundeena Store</Link>
                        </h1>
                    </div>
                    <NavMenu />
                    <div className="button-wrapper">
                        <Link className='button secondary-button' to="#">Contact</Link>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header