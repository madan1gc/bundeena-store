import { Icon } from "../../components";
import { useProductData } from '../../components/data';
import { useState, useEffect } from "react";

const NavMenu = () => {
    const [storeCategory, setStoreCategory] = useState([]);
    const data = useProductData();

    useEffect(() => {
        if (data && data.stores) {
            const storeData = data.stores;
            const names = Object.keys(storeData);
            setStoreCategory(names);
        }
    }, [data]);
    const generateSlug = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <ul className='nav-menu'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/offers">Offers</a>
            </li>
            <li className='has-submenu'>
                <a className='has-icon' href="#">What's in store <Icon icon="downArrow" /></a>
                <ul className='submenu'>
                    <li><a href="/allstore">All</a></li>
                    {
                        storeCategory.map((category, index) => (
                            <li className="store-category" key={index}>
                                <a href={`/store/${generateSlug(category)}`}>{category}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/fules">Fuels</a>
            </li>
            <li>
                <a href="#">News & Events</a>
            </li>
        </ul>
    );
};

export default NavMenu;
