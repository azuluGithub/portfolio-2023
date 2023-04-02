import NavBar from '../../component/NavBar';
import Banner from '../../component/Banner';
import About from '../../component/About';
import Tech from '../../component/Tech';
import Projects from '../../component/Projects';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';

import './HomePage.style.scss';

const HomePageComponent = () => {

    const renderBgImage = () => {
        const bg = `${process.env.PUBLIC_URL}/assets/images/background/banner.jpg`;

        return (
            <div className='HomePage-HeroBg'>
                <img
                    src={bg}
                    alt='hero background'
                    className='HomePage-HeroBgImage'
                />
            </div>
        );
    }

    const renderHero = () => {
        return (
            <div className='HomePage-Hero'>
                <NavBar />
                <Banner />
                { renderBgImage() }
            </div>
        );
    }

    const renderComponent = () => {
        return (
            <>
                { renderHero() }
                <About />
                <Tech />
                <Projects />
                <Contact />
                <Footer />
            </>
        );
    }

    return renderComponent();
}

export default HomePageComponent;