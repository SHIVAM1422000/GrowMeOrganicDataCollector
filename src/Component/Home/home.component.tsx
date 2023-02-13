import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationComponent from '../Navigation/Navigation.component'

const HomeComponent = () => {
  return (
    <div>
        <NavigationComponent/>
        <Outlet/>
    </div>
  )
}

export default HomeComponent