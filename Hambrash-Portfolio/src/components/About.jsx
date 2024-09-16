import React from 'react';
import Myphoto from '../assets/img1 re.png';
import '../css/App.css';


export const About = () => {
  return (
    <>
      <br /><br /><br />
      <div className="container">

      <h3 className='about-text slide-left mt-3'>About__ME?</h3>


        <div className="row align-items-center">
          <div className="col-md-4 text-center">
          
            <img src={Myphoto} alt="" className="img-fluid rounded slide-left" />
          </div>
          <div className="col-md-8 ">
            <br />
            <h4 className='text-center display-5 about-text slide-right' style={{ color: '#FF7E69', fontWeight: 'bold' }}>Frontend Developer</h4><br />
            
              <p className="lead fs-6 slide-right">
                 Transforming designs into seamless user experiences, bringing ideas to life on the web. My passion for frontend development drives me to continuously learn and adapt to new technologies like React.js and industry best practices. I thrive in dynamic environments where I can collaborate with designers and developers to create visually compelling, responsive, and functional solutions that elevate user experiences. <br /><br /> I'm Hambrash from Mogappair,Chennai.I have done my schooling at velammal Matriculaion Higher Secondary School in Mogappair.Currently , Pursuing my Bachelor's Degree in the stream of Computer Science and Engineering at Jaya Engineering College in Thiruninravur.
              </p>
           
          </div>
        </div>
      </div><br /><br />
      

    </>
  );
};
