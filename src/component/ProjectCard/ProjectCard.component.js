import './ProjectCard.style.scss';

const ProjectCard = ({ project }) => {

    const renderContent = () => {
        const {
            title,
            about,
            subtitle,
            primaryColor,
            secondaryColor 
        } = project;

        return (
            <div className='ProjectCard-ContentContainer'>
                <div className='ProjectCard-Content'>
                    <span className='ProjectCard-SubHeading'>{subtitle}</span>
                    <h1 className='ProjectCard-Heading'>{title}</h1>
                    <div 
                        className='ProjectCard-SmallSpacer'
                        style={{ backgroundColor: secondaryColor }}
                    ></div>
                    <p className='ProjectCard-ContentText'>{ about }</p>
                    <button 
                        className='ProjectCard-Button'
                        style={{ backgroundColor: primaryColor }}
                    >{'read more'}</button>
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
                <div className='ProjectCard-TypeContainer'>
                    <span className='ProjectCard-Type'>{type}</span>
                </div>
                <div className='ProjectCard-MainContainer'>
                    { renderContent() }
                    { renderImage() }
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