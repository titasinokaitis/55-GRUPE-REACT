import { Link } from 'react-router';
import logo from '../assets/react.svg';

export function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}