import React from 'react'
import '../css/Home.css'

export const Experience = () => {
  return (
    <>
        <div className="container"><br /><br /><br /><br /><br />
            <h5 className="text-center display-5 mb-3" style={{borderBottom:'2px solid #FFFFFF',color:'#E9DCD6',fontWeight:'300'}}>
                TOOLS
            </h5>
        </div><br /><br />

        <div className="container">
            <h5 className="text-center display-5 mb-3" style={{borderBottom:'2px solid #FFFFFF',color:'#E9DCD6',fontWeight:'300'}}>
                    EXPERIENCE
            </h5><br />
            <div className="row">
                <div className="col-md-4">
                    <h6 className="display-3 text-center" style={{color:'#E9DCD6'}}>1+</h6>
                    <p className="lead text-center expert-para" style={{color: '#FFB0E9'}}>Year of Experience</p>
                </div>
                <div className="col-md-4">
                    <h6 className="display-3 text-center" style={{color:'#E9DCD6'}}>24+</h6>
                    <p className="lead text-center expert-para" style={{color: '#FFB0E9'}}>Frontend MiniProjects</p>
                </div>
                <div className="col-md-4">
                    <h6 className="display-3 text-center" style={{color:'#E9DCD6'}}>4+</h6>
                    <p className="lead text-center expert-para" style={{color: '#FFB0E9'}}>Internships</p>
                </div>
            </div>
        </div><br /><br />

        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <p className="lead" style={{color:'#E9DCD6'}}>
                    For projects code , click the button below to travel to my <span className='expert-para' style={{color: '#FFB0E9'}}>Github</span>.
                    </p><br />
                    <a href="https://github.com/Hambrash" className="btn btn-secondary text-white ">Github Profile</a>
                </div>
                <div className="col-md-6 text-center">
                    <p className="lead" style={{color:'#E9DCD6'}}>
                        To see my Projects , click below button to travel to my <span className='expert-para'
                        style={{color: '#FFB0E9'}}>Projects</span></p><br />
                        <a href="" class="btn btn-secondary text-white ">Projects</a>
                </div>
            </div>
        </div>
    
    
    </>
  )
}
