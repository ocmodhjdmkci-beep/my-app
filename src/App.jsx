import { children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import Login from './components/Login';
import Register from './components/Register';
import Layaut from './components/Layaut';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home';
import { CounteContextProvider } from './Context';

let route = createBrowserRouter([
  {path:'/' , element:<Layaut/> , children:[
    {index:true, element:<Login/>},
    {path:'/register' , element:<Register/>},
    {path:'/home' , element:<Home/>},
  ]}
])
function App() {
  return <>
  <HeroUIProvider>
     <CounteContextProvider>
       <RouterProvider router={route}/>
     </CounteContextProvider>
  </HeroUIProvider>
  </>
}

export default App

