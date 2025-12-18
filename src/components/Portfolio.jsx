import React from 'react';
import img1 from '../assets/poert1.png';
import img2 from '../assets/port2.png';
import img3 from '../assets/port3.png';
export default function Portfolio() {
  return <>
    <div className="portfolio pb-4">
        <h1>PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="bi bi-star-fill"></i>      
            <div className="line ms-3"></div>
        </div>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 col-sm-6 ">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img1} alt=""  />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal1" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img2} alt="" />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img3} alt="" />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img1} alt="" />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal4" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img2} alt="" />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal5" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className='img position-relative'>
                        <img className='w-100 rounded-3' src={img3} alt="" />
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal6" className='leyar rounded-3 position-absolute top-0 bottom-0 start-0 end-0  d-flex justify-content-center align-items-center'>
                            <i className=" text-white bi bi-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
   


 <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img1} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img2} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img3} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img1} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img2} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img3} className='w-100' alt="" />
      </div>
     
    </div>
  </div>
</div> 
  </>
} 
