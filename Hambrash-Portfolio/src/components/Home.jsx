import React, { useState, useEffect } from 'react';
import '../css/Home.css';

export const Home = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const roles = ['Frontend Developer', 'Volunteer', 'Photo Editor'];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1000;

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      // After typing out the word, wait a bit, then move to the next one
      const delayTimeout = setTimeout(() => {
        setTimeout(() => {
          setCharIndex(0);
          setText(''); // Clear text for next role
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles
        }, delayBetweenRoles);
      }, delayBetweenRoles);
      return () => clearTimeout(delayTimeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center height text-center text-container"><br />
          <h5 className="fw-200 fs-5 slide-left">I'm</h5>
          <h2 className="slide-right">HAMBRASH P B</h2>
          <h2 className="display-6 mt-1" style={{ fontWeight: 'bold',color:'#FF7E69' }}>{text}</h2>
          <p className="fs-6 mt-2 ">"A passionate frontend developer, constantly driven by the desire to learn <br /> and innovate Crafting intuitive and engaging digital experiences is at the heart of what I do.."</p>
          <a href="" className="btn btn-secondary">Curriculum Vitae</a>
          <div className="d-flex social text-center mt-4">
            <a href="https://www.instagram.com/hambrish_24/"><i className="fa-brands fa-instagram fa-2x me-4"></i></a>
            <a href="mailto:hambrish9507@gmail.com"><i className="fa-solid fa-envelope fa-2x me-4"></i></a>
            <a href="https://www.linkedin.com/in/hambrash/"><i className="fa-brands fa-linkedin fa-2x me-4"></i></a>
            <a href="https://github.com/Hambrash"><i className="fa-brands fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};
