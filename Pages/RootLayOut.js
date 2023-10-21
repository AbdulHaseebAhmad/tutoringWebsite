import React from 'react'
import MainNavigation from '../Components/MainNavigation'
import { Outlet } from "react-router-dom";

export default function RootLayOut() {
  return (
    <>
    <MainNavigation/>
    <Outlet/>
    </>
  )
}
