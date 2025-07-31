import { NavLink } from 'react-router';
import logo from '../assets/react.svg';
import { adminMenuData, publicMenuData } from '../data/MenuData';

export function Header() {
    const isLoggedIn = false;
    const menuData = isLoggedIn ? adminMenuData : publicMenuData;

    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt='Logo' />
                    <span className="fs-4">Simple header</span>
                </a>
                <ul className="nav nav-pills">
                    {
                        menuData.map(item => (
                            <li key={item.href} className="nav-item">
                                <NavLink className='nav-link' to={item.href}>{item.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </header>
        </div>
    );
}