import React from 'react'

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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <div className="button-wrapper">
                        <li>
                            <a className='button secondary-button' href="">Contact</a>
                        </li>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header