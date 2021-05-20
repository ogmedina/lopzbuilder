import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return(
        <>
        <footer id="footer">
        <Container>
            <div className = "footer clearfix">
                <div ClassName = "copyright">
                    &copy; Copyright <strong><span>Lopz Builder</span></strong>. All Rights Reserved 2021
                </div>
            </div>
        </Container>
        </footer>
        </>
    )
};

export default Footer;