import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import logo from './images/logo2.png'
import Container from 'react-bootstrap/Container';

function JumboTron() {
    return(
        <>        
        <Jumbotron className="jumbotron">
        <Container>
            
                <img className="jumboLogo" src={logo} alt="logo" />
            
        
        </Container>
        <div className="jumbotron-heading text-uppercase text-center"></div>    
            
        {/* <p>
        <Button variant = "primary">Learn More</Button>
        </p> */}
        
        </Jumbotron>
        
        </>
    )
};

export default JumboTron;