import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faHeart, faLeaf, faLock, faTruckPickup } from '@fortawesome/free-solid-svg-icons';

function ServicesOffered() {
    return (
        <>
        <section id='services'>
        <Container className="container-fluid text-center" >
            <h2>SERVICES</h2>
            <h4>What we Offer</h4>
            <br />
            <div className = "row servicesTop">
                <div className="col-sm-4">
                    <FontAwesomeIcon icon = {faBriefcase} size="4x" color="blue" />
                    <h4>POWER</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <FontAwesomeIcon icon = {faHeart} size="4x" color="blue" />
                    <h4>LOVE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <FontAwesomeIcon icon = {faLock} size="4x" color="blue"/>
                    <h4>JOB DONE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div>
            
            <div className="row servicesRow">
            <div className="col-sm-4">
                <FontAwesomeIcon icon = {faLeaf} size="4x" color="blue" />
                <h4>GREEN</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
                <FontAwesomeIcon icon = {faCertificate} size="4x" color="blue"/>
                <h4>CERTIFIED</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
                <FontAwesomeIcon icon = {faTruckPickup} size="4x" color="blue" />
                <h4>HARD WORK</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>

            </div>
        </Container>
        </section>
        </>
    )
};

export default ServicesOffered;