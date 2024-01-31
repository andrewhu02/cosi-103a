import { Outlet, useNavigate } from "react-router-dom"
import Header from "./header/Header"
import MainNavigation from "./navigation/MainNavigation"
import { useEffect } from "react"

export default function Root() {
    const navigate = useNavigate();
    useEffect(() => {
        const shouldRedirect = (window.location.pathname == "/")
        if(shouldRedirect) {
            navigate("/homepage");
        }
    }, [navigate]);
    return (
        <>
            <Header/>
            <MainNavigation />
            <Outlet />
        </>
    )
}