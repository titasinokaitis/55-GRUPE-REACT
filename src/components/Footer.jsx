import { Link } from "react-router";
import { menuData } from "../data/MenuData";

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
                <ul className="nav col-md-8 justify-content-end">
                    {
                        menuData.map(item => (
                            <li key={item.href} className="nav-item">
                                <Link className='nav-link' to={item.href}>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </div>
    );
}