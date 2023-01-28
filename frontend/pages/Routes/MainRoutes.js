import React from 'react'
import {Routes,Route} from "react-router-dom"
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes