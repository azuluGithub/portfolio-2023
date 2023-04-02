import IconsContainer from '../IconsContainer';

import './TechSystemsCard.style.scss';

const TechSystemsCard = ({ system }) => {

    const renderItem = (item) => {
        const { id, name, img } = item;

        return (
            <div className='TechSystemsCard-Item' key={id}>
                <span className=''>{ name }</span>
                <IconsContainer img={img} />
            </div>
        );
    }

    const renderItems = () => {
        const { items } = system;

        return (
            <div className='TechSystemsCard-Items'>
                { items.length && items.map(renderItem) }
            </div>
        );
    }

    const renderSystem = () => {
        const { title } = system;
        return (
            <div className='TechSystemsCard'>
                <span className='TechSystemsCard-Title'>{ title }</span>
                <div className='TechSystemsCard-SmallSpacer'></div>
                { renderItems() }
            </div>
        );
    }

    return renderSystem();
}

export default TechSystemsCard;