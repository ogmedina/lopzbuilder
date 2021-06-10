import Jumbotron from '../Components/Jumbotron/index';
import AboutCompany from '../Components/AboutCompany/index';
import ServicesOffered from '../Components/ServicesOffered/index';
import Portfolio from '../Components/Portfolio/index';
import CarouselText from '../Components/Carousel/index';
import FormspreeForm from '../Components/FormspreeForm/index';
import Navigation from '../Components/NavBar/index';
import Footer from '../Components/Footer/index';

function Main() {
    return(
        <>
        <Navigation />
        <Jumbotron />
        <AboutCompany />
        <ServicesOffered />
        <Portfolio />
        <CarouselText />
        <FormspreeForm />
        <Footer />
        </>
    );
};

export default Main;