import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return <>
    <div className="contact">
        <h1 className='text-center fw-bold'>CONTACT SECTION</h1>
        <div className='d-flex justify-content-center'>
            <div className="line-contact me-3"></div>
            <i className=" star-contact bi bi-star-fill text-white"></i>
            <div className="line-contact ms-3"></div>
        </div>
        
            <div className="input">
               <div className="container w-50">
                 <div className="form-floating mb-4">
                    <input type="text" className="form-control border-0 rounded-0" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">user Name</label>
                </div>
                 <div className="form-floating mb-4">
                    <input type="number" className="form-control border-0 rounded-0" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">user Age</label>
                </div>
                 <div className="form-floating mb-4">
                    <input type="email" className="form-control border-0 rounded-0" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">user Email</label>
                </div>
                 <div className="form-floating mb-4">
                    <input type="password" className="form-control border-0 rounded-0" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">user Password</label>
                </div>
                <button className='text-white border-0'>send message</button>
               </div>
            </div>
    </div>
    </>
  }
}
