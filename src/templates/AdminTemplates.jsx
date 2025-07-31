import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function AdminTemplate() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <h1>LOGIN FORM</h1>
                <Footer />
            </>
        )
    }
}