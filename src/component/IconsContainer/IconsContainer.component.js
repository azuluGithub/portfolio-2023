import './IconsContainer.style.scss';

const IconsContainer = ({ img, url, id }) => {
    if (id === 'phone') {
        return (
            <a
                href={`tel:${url}`}
                className='IconsContainer' >
                <img
                    className='IconsContainer-Icon'
                    src={img}
                    alt='icon'
                />
            </a>
        );
    }

    if (id === 'mail') {
        return (
            <a
                href={`mailto:${url}`}
                className='IconsContainer' >
                <img
                    className='IconsContainer-Icon'
                    src={img}
                    alt='icon'
                />
            </a>
        );
    }

    return (
        <a 
            href={url}
            target="_blank"
            rel="noreferrer" 
            className='IconsContainer'>
            <img
                className='IconsContainer-Icon'
                src={img}
                alt='icon'
            />
        </a>
    );
}

export default IconsContainer;
