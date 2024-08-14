import { NavMenu } from "../../components"


const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header-wrapper">
                    <div className="logo">
                        <h1>
                            <a href="/">Bundeena Store</a>
                        </h1>
                    </div>
                    <NavMenu />
                    <div className="button-wrapper">
                        <a className='button secondary-button' href="#">Contact</a>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header