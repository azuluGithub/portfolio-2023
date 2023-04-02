import TechSystemsCard from '../TechSystemsCard';

import './TechSystems.style.scss';

const TechSystems = () => {

    const systemsList = [
        {
            id: 'operating systems',
            title: 'operating systems',
            items: [
                {
                    id: 'linux',
                    name: 'linux',
                    img: `${process.env.PUBLIC_URL}/assets/icons/linux.png`,
                },
                {
                    id: 'windows',
                    name: 'windows',
                    img: `${process.env.PUBLIC_URL}/assets/icons/windows.png`,
                },
                {
                    id: 'mac',
                    name: 'mac',
                    img: `${process.env.PUBLIC_URL}/assets/icons/mac.png`,
                }
            ]
        },
        {
            id: 'technical tools',
            title: 'technical tools',
            items: [
                {
                    id: 'git',
                    name: 'git',
                    img: `${process.env.PUBLIC_URL}/assets/icons/git.png`,
                },
                {
                    id: 'github',
                    name: 'github',
                    img: `${process.env.PUBLIC_URL}/assets/icons/github.png`,
                },
                {
                    id: 'vs code',
                    name: 'vs code',
                    img: `${process.env.PUBLIC_URL}/assets/icons/vscode.png`,
                },
                {
                    id: 'npm',
                    name: 'npm',
                    img: `${process.env.PUBLIC_URL}/assets/icons/npm.png`,
                }
            ]
        },
        {
            id: 'business tools',
            title: 'business tools',
            items: [
                {
                    id: 'slack',
                    name: 'slack',
                    img: `${process.env.PUBLIC_URL}/assets/icons/slack.png`,
                },
                {
                    id: 'ms teams',
                    name: 'microsoft teams',
                    img: `${process.env.PUBLIC_URL}/assets/icons/msteams.png`,
                },
                {
                    id: 'google meet',
                    name: 'google meet',
                    img: `${process.env.PUBLIC_URL}/assets/icons/googlemeet.png`,
                },
                {
                    id: 'zoom',
                    name: 'zoom',
                    img: `${process.env.PUBLIC_URL}/assets/icons/zoom.png`,
                }
            ]
        },
    ];

    const renderTechSystemsCard = (system) => {
        const { id } = system;

        return (
            <TechSystemsCard 
                key={id}
                system={system}
            />
        );
    }

    const renderTechSystemsList = () => {
        return (
            <div className='TechSystems-TechSystemsList'>
                { systemsList.length && systemsList.map(renderTechSystemsCard)}
            </div>
        );
    }

    const renderTechSystems = () => {
        return (
            <div className='TechSystems'>
                { renderTechSystemsList() }
            </div>
        );
    }

    return renderTechSystems();
}

export default TechSystems;