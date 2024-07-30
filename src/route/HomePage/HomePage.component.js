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

    const renderBackToTop = () => {
        return (
            <div className='HomePage-BackToTop' onClick={() => window.scrollTo(0, 0)}>
                Back to the Top
            </div>
        )
    }

    const renderComponent = () => {
        return (
            <div className='HomePage'>
                { renderHero() }
                <About />
                <Tech />
                <Projects />
                <Contact />
                <Footer />
                { renderBackToTop()}
            </div>
        );
    }

    return renderComponent();
}

export default HomePageComponent;