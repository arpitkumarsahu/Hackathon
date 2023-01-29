import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import Payment from '../components/Payment'
import SignUp from '../components/SignUp'
// import Home from '../Components/Home'
// import Login from '../Components/Login'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/payment" element={<Payment/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes