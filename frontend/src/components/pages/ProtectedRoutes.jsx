import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'

const ProtectedRoutes = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const handleMenuClick = ()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className='bg-black bg-opacity-10 min-h-screen'>
      <Navbar onClickMenu = {handleMenuClick} isSidebarOpen={isSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
    </div>
  )
}

export default ProtectedRoutes