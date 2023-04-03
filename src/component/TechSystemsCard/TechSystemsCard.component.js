import IconsContainer from '../IconsContainer';

import './TechSystemsCard.style.scss';

const TechSystemsCard = ({ system }) => {

    const renderItem = (item) => {
        const { id, name, img } = item;

        return (
            <div className='TechSystemsCard-Item' key={id}>
                <IconsContainer img={img} />
                <span className='TechSystemsCard-ItemName'>{ name }</span>
            </div>
        );
    }

    const renderDivider = () => {
        return (
            <div className='Divider'></div>
        )
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
                { renderDivider() }
                <div className='TechSystemsCard-SmallSpacer SmallDivider'></div>
                { renderDivider() }
                { renderItems() }
            </div>
        );
    }

    return renderSystem();
}

export default TechSystemsCard;