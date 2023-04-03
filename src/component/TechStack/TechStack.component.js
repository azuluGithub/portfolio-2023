import Divider from '../Divider';
import './TechStack.style.scss';

const TechStack = () => {

    const renderRowOne = () => {
        return (
            <div className='TechStack-Row'>
                <span className='TechStack-JavaScript'>{'JavaScript'}</span>
                <span className='TechStack-React'>{'React Js'}</span>
                <span className='TechStack-TypeScript'>{'TypeScript'}</span>
                <span className='TechStack-Express'>{'Express Js'}</span>
            </div>
        )
    }

    const renderRowTwo = () => {
        return (
            <div className='TechStack-Row'>
                <span className='TechStack-Tailwind'>{'Tailwind'}</span>
                <span className='TechStack-Node'>{'Node Js'}</span>
                <span className='TechStack-Firebase'>{'Firebase'}</span>
                <span className='TechStack-Mysql'>{'MySQL'}</span>
            </div>
        )
    }

    const renderRowThree = () => {
        return (
            <div className='TechStack-Row'>
                <span className='TechStack-graphql'>{'GraphQL'}</span>
                <span className='TechStack-Mongodb'>{'MongoDB'}</span>
                <span className='TechStack-Sass'>{'Sass'}</span>
                <span className='TechStack-Bootstrap'>{'BootStrap'}</span>
            </div>
        )
    }

    const renderRowFour = () => {
        return (
            <div className='TechStack-Row'>
                <span className='TechStack-Redux'>{'Redux'}</span>
                <span className='TechStack-Css'>{'Css3'}</span>
                <span className='TechStack-Postgres'>{'PostgreSQL'}</span>
                <span className='TechStack-Semantic'>{'Semantic Ui'}</span>
            </div>
        )
    }

    const renderLanguages = () => {
        return (
            <div className='TechStack-Languages'>
                { renderRowOne() }
                { renderRowTwo() }
                { renderRowThree() }
                { renderRowFour() }
            </div>
        )
    }

    const renderTechStack = () => {
        return (
            <div className='TechStack'>
                <Divider />
                <p className='TechStack-Heading TextCenter'>{'Tech Stack'}</p>
                <Divider />
                <div className='TechStack-SmallSpacer SmallDivider'></div>
                <Divider />
                { renderLanguages() }
            </div>
        );
    }

    return renderTechStack();
}

export default TechStack;

