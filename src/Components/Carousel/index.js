import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function CarouselText() {
    return (
        <>
        <section className="carousel">
        <Container className="text-center">
        <div className="section-title-other">
        <h2>Testimony</h2>
        </div>
        <Carousel fade>
            <Carousel.Item className="carouselItem">
            <h4>"This Company is awesome"<br /><span style={{fontStyle: "normal"}}>Michael Roe, Vice President, Comment Box</span></h4>
     
             </Carousel.Item>

            <Carousel.Item className="carouselItem">
            <h4>"I am very happy with this company!"<br /><span style={{fontStyle: "normal"}}>John Doe, Salesman, Rep INC.</span></h4>     
            </Carousel.Item>

            <Carousel.Item className="carouselItem">
            <h4>"One word....WOW!"<br /><span style={{fontStyle: "normal"}}>Chandler Bing, Actor, Company Name</span></h4>           
           
            </Carousel.Item>
        </Carousel>
        </Container>
        </section>
        </>
    );
};

export default CarouselText;