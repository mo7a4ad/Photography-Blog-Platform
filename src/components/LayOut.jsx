import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LayOut() {
  return (
      <div>
          <NavBar />
          <Outlet/>
          <Footer/>
    </div>
  )
}
