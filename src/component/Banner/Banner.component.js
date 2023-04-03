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
      url: 'https://www.linkedin.com/in/arnoldzulu-532539150 '
    },
    {
      id: 'github',
      type: 'link',
      img: `${process.env.PUBLIC_URL}/assets/icons/github.png`,
      url: ' https://github.com/azuluGithub'
    },
  ];

  const renderIcon = (contact) => {
    const { id, img } = contact;

    return (
      <IconsContainer 
        key={id} 
        img={img} 
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
        <span className='Banner-SubHeading'>{'Junior Software Developer'}</span>
        <Divider />
        <h1 className='Banner-Heading'>{'ARNOLD ZULU'}</h1>
        <Divider />
        <div className='Banner-SmallSpacer SmallDivider'></div>
        <Divider />
        <p className='Banner-ContentText'>
          {'I am a MERN Stack JavaScript developer with a Software Engineering NQF level 5 certificate. I can work as a Front-End developer, PHP developer, Node.Js developer, JavaScript developer, React Js developer and Software developer. I build applications in PHP, HTML, CSS, ReactJs, Express and NodeJs, MongoDB, MySQL, PostgreSQL and JavaScript.'}
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