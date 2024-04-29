import { Outlet } from "react-router-dom"
import Header from "../componets/Header"
import Navbar from "../componets/Navbar"


const Layout = () =>{
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;