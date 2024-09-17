import React, { useRef } from 'react'
import Myphoto from '../assets/img1 re.png';
import '../css/Home.css'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_g3vcg3b', 'template_7inlfys', form.current, {
          publicKey: 'bbNnSPqS2Vt7Oo_UE',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


  return (
    <>
        <div className="container"><br /><br /><br />
            <header className="d-flex flex-column align-items-center text-center">
                <img src={Myphoto} className='img-fluid contact-image' alt="" />
                <p className="lead mt-3 contact-para" style={{color:'#E9DCD6'}}>
                   Hi i'm hambrash , you may follow and contact me using following
                   fields..
                </p>
            </header>
        </div><br />

        <div className="container">
          <h1 className="text-center contact-para">Contact Me</h1>
          <p className=" text-center">Please Fill out the form below to discuss any work opportunities</p>
        </div>


        <div className="container">
       
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className='name' placeholder='Your Name' name='from_name'/>
              <input type="email" className="email" placeholder='Your Email' name='from_email' />
              <textarea name="message" id="" rows="5" placeholder='Your Message' className='msg'></textarea>
              <button type='submit' value="send" className="submitbtn">Submit</button>
            </form>
        </div>

        <div className="container">
          <div className="icons d-flex align-items-center justify-content-center">
            <a href="https://www.instagram.com/hambrish_24/"><i className="fa-brands fa-instagram fa-2x me-3"></i></a>
            <a href="mailto:hambrish9507@gmail.com"><i className="fa-solid fa-envelope fa-2x me-3"></i></a>
            <a href="https://www.linkedin.com/in/hambrash/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
          </div>
        </div><br />

        
          <footer className='footer'>
            <p>&#169; CopyRights All are reserved by <span className='contact-para'>Hambrash</span></p>
          </footer>
        
    
    
    </>
  )
}
