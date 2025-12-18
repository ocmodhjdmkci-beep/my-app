import React from 'react';

export default function About() {
  return <>
  <div className="about">
    <h1 className='text-center text-white fw-bold'>ABOUT COMPONENT</h1>
    <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3"></div> 
        <i className="bi bi-star-fill text-white"></i>
        <div className="line ms-3"></div>
    </div>
    <div className="container">
        <div className="row text-white">
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    </div>
  </div>
  </>;
}
