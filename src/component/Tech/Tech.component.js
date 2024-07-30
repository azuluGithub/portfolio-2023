import TechStack from '../TechStack';
import TechSystems from '../TechSystems';

import './Tech.style.scss';

const Tech = () => {

    const renderTech = () => {
        return (
            <section className='Tech' id="skills">
                <div className='ContainerWrapper PaddedContainer'>
                    <h2 className='Tech-Heading TextCenter'>{'Technical Skills'}</h2>
                    <TechStack />
                </div>
                <TechSystems />
            </section>
        );
    }

    return renderTech();
}

export default Tech;