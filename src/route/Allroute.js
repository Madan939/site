import React from 'react'
import { Routes, Route } from "react-router-dom"
import {Home,Card} from "../pages"
const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Card" element={<Card />}></Route>
      </Routes>
    </>
  )
}

export default Allroute