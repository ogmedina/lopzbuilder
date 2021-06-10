import React from 'react';
import Container from 'react-bootstrap/Container';

function AboutCompany() {
    return (
        <>
        <section id="about">            
        <br />
        <div className="section-title">
        <h2 className="text-center">About Us</h2>
        </div>
        <br />
        <Container fluid>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 text-center">                    
                    <p>We are a mid-sized Texas based General Contractor built upon the principles of honesty and integrity. Our family-owned and operated company has strived to deliver high quality construction with exceptional customer service. Through the years we have developed a strong reputation and long-lasting relationships with our customers and subcontractors. From cost estimating to construction completion, we understand what it takes to complete a project on time.</p>                    
                </div>                
                <div className="col-lg-5 hideCol">                    
                    <span className="fa-stack fa-7x center">
                        <i className="far fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-toolbox fa-stack-1x fa-1x" ></i>
                    </span>
                </div>
                <div className="col-lg-1 hideCol"></div>                
            </div>
        </Container>
        <br />
        <br />   
        </section>
        </>
    );
};

export default AboutCompany;