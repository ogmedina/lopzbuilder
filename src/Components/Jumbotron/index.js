import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function JumboTron() {
    return(
        <>        
        <Jumbotron className="jumbotron">
        
        <div className="jumbotron-heading text-uppercase text-center">Lópz Builder</div>        
        <p>
        <Button variant = "primary">Learn More</Button>
        </p>
        
        </Jumbotron>
        </>
    )
};

export default JumboTron;