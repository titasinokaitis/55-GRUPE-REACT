import { NavLink } from 'react-router';
import logo from '../assets/react.svg';

export function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt='Logo' />
                    <span className="fs-4">Simple header</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/services'>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/register'>Register</NavLink>
                    </li>
                </ul>
            </header>
        </div>
    );
}