import React from 'react';
// import { FormspreeProvider, useForm } from '@formspree/react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fasmapmarked } from '@fortawesome/free-solid-svg-icons';
//import { famapmarkedalt } from '@fortawesome/fontawesome-free-solid'




function FormspreeForm() {  
    return(
        <>
        <section id='contact'>
        <Container>
                <div className="section-title-other">
                <h2 className="text-center">CONTACT</h2>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-5 contactInfo">
                    <p>Contact us and we'll get back to you</p>                    
                    <p><i className="fas fa-map-marked-alt fa-2x"></i> San Antonio, TX</p>
                    <p><i className="fas fa-phone fa-2x"></i>(000)000-0000</p>
                    <p><i className="fas fa-envelope-open-text fa-2x"></i> myemail@test.com</p>
                    </div>
                    <div className="col-sm-7">
                    <form id="contactForm" action="https://formspree.io/f/xqkwerlb" method="POST">
                    
                        <div className="row">                            
                            <div className="col-sm-6 form-group name">                            
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required="required" data-validation-required-message="Please enter your name." />
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="col-sm-6 form-group email">
                                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required="required" data-validation-required-message="Please enter your email." />
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <br />
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                            <div className="row">
                            <div className="col-sm-12 form-group">                            
                            <Button variant="primary" className="btn btn-default pull-right" type="submit">Send</Button>
                            </div>                            
                           </div>   
                           </form>     
                        </div>                     
                     </div>
            </Container>   
            </section>     
        </>
    );
};


export default FormspreeForm;




                            