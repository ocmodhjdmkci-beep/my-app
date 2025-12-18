import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'


import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layaut from './components/Layaut'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
let route = createBrowserRouter([
  {path:'' , element:<Layaut/> , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
  ]},
  
])
function App() {
  return <>
    <RouterProvider router={route}/>
  </>
}

export default App

