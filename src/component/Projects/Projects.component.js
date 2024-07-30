import Divider from '../Divider';
import ProjectCard from '../ProjectCard';

import './Projects.style.scss';

const Projects = () => {

    const projectsList = [
        {
            id: 'college',
            type: 'personal project',
            title: 'college',
            subtitle: 'Mpumalanga Nursing College',
            about: 'Mpumalanga Nursing College website is a concept landing page that I created to mimic a real life college website. The website is built using HTML5, CSS3, ReactJs, JavaScript and Sass.',
            bgImg: `${process.env.PUBLIC_URL}/assets/images/projects/college/college-bg.jpg`,
            img: `${process.env.PUBLIC_URL}/assets/images/projects/college/college-home.png`,
            primaryColor: '#3E40A5',
            secondaryColor: '#E5333C',
            url: 'https://mpumalanga-college.web.app/',
        },
        {
            id: 'logistics',
            type: 'personal project',
            title: 'logistics',
            subtitle: 'We4U Logistics',
            about: 'We4U Logistics website is a concept landing page that I created using HTML5, CSS3, ReactJs and JavaScript',
            img: `${process.env.PUBLIC_URL}/assets/images/projects/logistics/logistics-home.png`,
            bgImg: `${process.env.PUBLIC_URL}/assets/images/projects/logistics/logistics-bg.jpg`,
            primaryColor: '#3D8182',
            secondaryColor: '#deb887',
            url: 'https://we4u-117b9.web.app/',
        },
        {
            id: 'social',
            type: 'personal project',
            title: 'social',
            subtitle: 'starz only',
            about: 'StarzOnly is a full-stack concept social app built in MERN Stack [MongoDB, Express, React Js And Node Js], HTML5, CSS3 and Redux. It’s features includes Real-Time Chat with socket.io, Posts, Image upload, Login and user profile.',
            img: `${process.env.PUBLIC_URL}/assets/images/projects/starzonly/starzonly-home.png`,
            bgImg: `${process.env.PUBLIC_URL}/assets/images/projects/starzonly/starzonly-bg.jpg`,
            primaryColor: '#1EB1DD',
            secondaryColor: '#D8D8D8',
            url: 'https://www.linkedin.com/feed/update/urn:li:activity:6830438016373280768/'
        }
    ];

    const renderProjectCard = (project) => {
        const { id } = project;

        return (
            <ProjectCard 
                key={id}
                project={project}
            />
        )
    }

    const renderProjects = () => {
        return (
            <section className='Projects' id="projects">
                <h2 className='Projects-Heading TextCenter'>{'Projects'}</h2>
                <Divider />
                { projectsList.length && projectsList.map(renderProjectCard) }
            </section>
        );
    }

    return renderProjects();
}

export default Projects;