import React from 'react'
import Header from "../component/Header/Header"
import { Outlet } from 'react-router-dom'


const UserRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default UserRoot