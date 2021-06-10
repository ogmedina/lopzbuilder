import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from './images/logo2_edit2.png'
import Container from 'react-bootstrap/Container';

function JumboTron() {
    return(
        <>        
        <Jumbotron className="jumbotron">
        <Container>            
            <img className="jumboLogo" src={logo} alt="logo" />
        </Container>
        <div className="jumbotron-heading text-uppercase text-center"></div>
        </Jumbotron>        
        </>
    )
};

export default JumboTron;