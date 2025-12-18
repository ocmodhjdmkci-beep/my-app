import React from 'react';

export default function Footer() {
  return <>
  <div className="footer ">
    <div className="container">
        <div className="row">
            <div className="col-md-4 text-white text-center">
                <h2 className=' fs-3 fw-bold'>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white text-center">
                <h2 className=' fs-3 fw-bold'>ARUOND THE WEB</h2>
                <div className="icon d-flex justify-content-center ">
                    <div className='d-flex justify-content-center align-items-center'><i className="text-white bi bi-facebook"></i></div>
                    <div className='d-flex justify-content-center align-items-center'><i className="bi bi-twitter"></i></div>
                    <div className='d-flex justify-content-center align-items-center'><i className="bi bi-linkedin"></i></div>
                    <div className='d-flex justify-content-center align-items-center'><i className="bi bi-globe2"></i></div>
                </div>
            </div>
            <div className="col-md-4 text-white text-center">
                <h2 className='fs-3 fw-bold'>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
  </div>
    <div className="foot">
        <h3 className='text-center text-white fs-6'>Copyright © Your Website 2021</h3>
    </div>
  </>
}
