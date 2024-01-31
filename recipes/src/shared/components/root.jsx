import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import MainNavigation from "./navigation/MainNavigation"

export default function Root() {
    return (
        <>
            <Header/>
            <MainNavigation />
            <Outlet />
        </>
    )
}