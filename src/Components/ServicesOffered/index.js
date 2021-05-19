import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faHeart, faLeaf, faLock, faTruckPickup } from '@fortawesome/free-solid-svg-icons';

function ServicesOffered() {
    return (
        <>
        <section id='services'>
        <Container className="container-fluid text-center" >
            <h2>Services</h2>
            <h4>Things you can always expect from us:</h4>
            <br />
            <div className = "row servicesTop">
                <div className="col-sm-4">
                    {/* <FontAwesomeIcon icon = {faBriefcase} size="4x" color="blue" /> */}
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-hard-hat fa-stack-1x fa-1x" ></i>
                    </span>
                    <h4>Safety</h4>
                    <p>Safety comes first.</p>
                </div>
                <div className="col-sm-4">
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-building fa-stack-1x fa-1x" ></i>
                    </span>
                    <h4>Quality</h4>
                    <p>We'll meet your expectations.</p>
                </div>
                <div className="col-sm-4">
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-users fa-stack-1x fa-1x" ></i>
                    </span>
                    <h4>Customer Service</h4>
                    <p>Quality service to all clients</p>
                </div>
            </div>
            <div className="row servicesRow">
            <div className="col-sm-4">
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-pencil-ruler fa-stack-1x fa-1x" ></i>
                    </span>
                <h4>Integrity</h4>
                <p>Your best interest is our only interest.</p>
            </div>
            <div className="col-sm-4">
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-certificate fa-stack-1x fa-1x" ></i>
                    </span>
                <h4>Certified</h4>
                <p>Team members are experienced and properly certified.</p>
            </div>
            <div className="col-sm-4">
                    <span className="fa-stack fa-4x center">
                        <i className="far fa-circle fa-stack-2x text-success"></i>
                        <i className="fas fa-hands-helping fa-stack-1x fa-1x" ></i>
                    </span>
                <h4>Teamwork</h4>
                <p>Team members work together to solve challenges</p>
            </div>
            </div>
        </Container>
        </section>
        </>
    )
};

export default ServicesOffered;