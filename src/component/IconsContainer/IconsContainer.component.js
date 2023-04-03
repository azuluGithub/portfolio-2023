import './IconsContainer.style.scss';

const IconsContainer = ({ img }) => {
    return (
        <div className='IconsContainer'>
            <img
                className='IconsContainer-Icon'
                src={img}
                alt='icon'
            />
        </div>
    );
}

export default IconsContainer;
