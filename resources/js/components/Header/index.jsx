import { NavMenu } from "../../components"

import { logo } from "../images"


const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-wrapper">
                    <div className="logo">
                        <h1>
                            <a href="/">
                                <img src={logo} alt="" />
                            </a>
                        </h1>
                    </div>
                    <NavMenu />
                    <div className="button-wrapper">
                        <a className='button white-button' href="/contact">Contact</a>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header