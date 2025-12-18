import React from 'react';
import ava from '../assets/avataaars.svg'

export default function Home() {
  return <>
  <div className="home text-center text-white">
    <img src={ava} alt="" />
    <h1 className='fw-bold'>START FRAMEWORK</h1>
        <div className='d-flex justify-content-center'>
            <div className="line me-3"></div> 
            <i className="bi bi-star-fill text-white"></i>
            <div className="line ms-3"></div>
        </div>
    <p>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
}
