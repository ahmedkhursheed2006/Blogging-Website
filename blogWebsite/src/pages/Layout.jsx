import React from 'react'
import NavBar from '../components/navBar'
import { Outlet } from 'react-router'
function Layout() {
    return (
        <>

         <NavBar/>
         <Outlet/>

        </>
    )
}

export default Layout
