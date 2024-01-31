import { Outlet } from "react-router-dom"
import Header from "../shared/components/header/Header"
import MainNavigation from "../shared/components/navigation/MainNavigation"

export default function Root() {
    return (
        <>
            <Header/>
            <MainNavigation />
            <Outlet />
        </>
    )
}