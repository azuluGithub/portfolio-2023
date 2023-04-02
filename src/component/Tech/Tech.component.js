import TechStack from '../TechStack';
import TechSystems from '../TechSystems';

import './Tech.style.scss';

const Tech = () => {

    const renderTech = () => {
        return (
            <section className='Tech'>
                <div className='ContainerWrapper'>
                    <h2 className='Tech-Heading'>{'Technical Skills'}</h2>
                    <TechStack />
                    <TechSystems />
                </div>
            </section>
        );
    }

    return renderTech();
}

export default Tech;