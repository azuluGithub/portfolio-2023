import IconsContainer from '../IconsContainer';
import Divider from '../Divider';

import './Banner.style.scss';

const BannerComponent = () => {

  const contactsList = [
    {
      id: 'phone',
      type: 'none-link',
      img: `${process.env.PUBLIC_URL}/assets/icons/phone.png`,
      url: '0814099783'
    },
    {
      id: 'mail',
      type: 'none-link',
      img: `${process.env.PUBLIC_URL}/assets/icons/mail.png`,
      url: 'zuluarnold0@gmail.com'
    },
    {
      id: 'linkedin',
      type: 'link',
      img: `${process.env.PUBLIC_URL}/assets/icons/linkedin.png`,
      url: 'https://www.linkedin.com/in/arnold-zulu-532539150'
    },
    {
      id: 'github',
      type: 'link',
      img: `${process.env.PUBLIC_URL}/assets/icons/github.png`,
      url: ' https://github.com/azuluGithub'
    },
  ];

  const renderIcon = (contact) => {
    const { id, url, img } = contact;

    return (
      <IconsContainer 
        key={id} 
        img={img}
        id={id}
        url={url}
      />
    );
  }

  const renderContacts = () => {
    return (
      <div className='Banner-Contacts'>
        { contactsList.length && contactsList.map(renderIcon) }
      </div>
    );
  }

  const renderContent = () => {
    return (
      <div className='Banner-Content'>
        <span className='Banner-SubHeading'>{'Front-End HTML5/CSS3 Developer'}</span>
        <Divider />
        <h1 className='Banner-Heading'>{'ARNOLD ZULU'}</h1>
        <Divider />
        <div className='Banner-SmallSpacer SmallDivider'></div>
        <Divider />
        <p className='Banner-ContentText'>
          {'I am a Front-End HTML5/CSS3 Developer with a WeThinkCode_ Software Engineering certificate. I am a critical thinker who uses JavaScript, React JS, HTML5, and CSS3 to build reactive and responsive user interfaces that enhance user experience. . I have been working with JavaScript, HTML5, and CSS3 since 2017. I can design user interfaces with Figma and convert designs into code. I am self-motivated and dynamic, capable of working both independently and as part of a team.'}
        </p>
        <Divider />
        { renderContacts() }
      </div>
    );
  }

  const renderEmptyContainer = () => {
    return <div></div>;
  }

  const renderComponent = () => {
    return (
      <section className='Banner'>
        <div className='ContainerWrapper Banner-MainContainer Split'>
          <div className='Banner-ContentContainer'>
            { renderContent() }
          </div>
          { renderEmptyContainer() }
        </div>
      </section>
    );
  }

  return renderComponent();
}

export default BannerComponent;