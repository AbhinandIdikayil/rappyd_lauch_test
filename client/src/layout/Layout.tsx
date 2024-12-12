import Footer from "@/components/component/Footer/Footer"
import Navbar from "@/components/component/Navbar"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout