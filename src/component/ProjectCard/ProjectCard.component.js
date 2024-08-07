import Divider from '../Divider';

import './ProjectCard.style.scss';

const ProjectCard = ({ project }) => {

    const renderContent = () => {
        const {
            title,
            about,
            subtitle,
            primaryColor,
            url,
            secondaryColor 
        } = project;

        return (
            <div className='ProjectCard-ContentContainer'>
                <div className='ProjectCard-Content'>
                    <span className='ProjectCard-SubHeading'>{subtitle}</span>
                    <Divider />
                    <h1 className='ProjectCard-Heading'>{title}</h1>
                    <Divider />
                    <div 
                        className='ProjectCard-SmallSpacer SmallDivider'
                        style={{ backgroundColor: secondaryColor }}
                    ></div>
                    <Divider />
                    <p className='ProjectCard-ContentText'>{ about }</p>
                    <Divider />
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className='ProjectCard-Button Button'
                        style={{ backgroundColor: primaryColor }}
                    >{'View Project'}</a>
                </div>
            </div>
        );
    }

    const renderImage = () => {
        const { img } = project;

        return (
            <div className='ProjectCard-DisplayImageContainer'>
                <img
                    className='ProjectCard-DisplayImage'
                    src={img}
                    alt='project display'
                />
            </div>
        );
    }

    const renderProject = () => {
        const { type, bgImg } = project;

        return (
            <div className='ProjectCard'>
                <div className='ContainerWrapper'>
                    <div className='ProjectCard-TypeContainer'>
                        <span className='ProjectCard-Type'>{type}</span>
                    </div>
                    <div className='ProjectCard-MainContainer Split'>
                        { renderContent() }
                        { renderImage() }
                    </div>
                </div>
                <div className='ProjectCard-BgImageContainer'>
                    <img
                        className='ProjectCard-BgImage'
                        src={bgImg}
                        alt='project display background'
                    />
                </div>
            </div>
        );
    }

    return renderProject();
}

export default ProjectCard;