import{ useState } from 'react'
import {NavBar} from './navBar'
import {SideBar} from './Sidebar'

const  NavandSidebar =()=> {

    const [toggleSidebar,setToggleSidebar] =useState(false)


    const toggleSidebarHandler = () => {
        setToggleSidebar(!toggleSidebar)
         
    }

  return (
    <>
        <NavBar toggleSidebarHandler={toggleSidebarHandler} />
        <SideBar  toggleSidebarHandler={toggleSidebarHandler} toggleSidebar={toggleSidebar}/>
   
    </>
  )
}

export {NavandSidebar}