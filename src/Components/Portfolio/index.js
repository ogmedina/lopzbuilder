import React from 'react';
import Container from 'react-bootstrap/Container';
import House1 from '../Portfolio/Images/house_1.jpg'
import House2 from '../Portfolio/Images/house_2.jpg'
//import House3 from '../Portfolio/Images/house_3.jpg'
import House4 from '../Portfolio/Images/house_4.jpg'


function Portfolio() {
    return (
        <>
        <section id='portfolio'>
        <Container className="container-fluid text-center portfolioContainer">
            <h2>Portfolio</h2>
            <h4>Some great projects we have created</h4>
            <div className= "row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src ={House1} alt ="first house alt" />
                        <p><strong>Bulverde, TX</strong></p>
                        <p>3 bedroom, 2 bath</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src = {House2} alt="second house alt" />
                        <p><strong>San Antonio, TX</strong></p>
                        <p>Project Management</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src = {House4} alt="third house alt" />
                        <p><strong>Leon Valley, TX</strong></p>
                        <p>4 bedroom, 2 1/2 bath</p>
                    </div>
                </div>
            </div>
        </Container>
        </section>
        
        </>
    );
};

export default Portfolio;