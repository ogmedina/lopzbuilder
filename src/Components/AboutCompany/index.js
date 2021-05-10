import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';



function AboutCompany() {
    return (
        <>
        <section id="about">
        <br />
        <h2 className="text-center">About Us</h2>
        <Container fluid>
            <div className="row">
                <div className="col-md-6 text-center">
                    <h4>Lorem ipsum..</h4>
                    <p>Lorem ipsum</p>                    
                </div>
                <div className="col-md-6 text-center">
                    <FontAwesomeIcon className= "aboutIcon" icon= {faTools} size="6x" />
                </div>
            </div>
        </Container>
        <br />
        <br />
   
        </section>
        </>
    );
};

export default AboutCompany;