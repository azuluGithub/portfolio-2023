import Divider from '../Divider';

import './About.style.scss';

const AboutComponent = () => {

  const contactsList = [
    {
      id: 'phone number',
      name: 'Phone Number',
      value: '+27 81 409 9783'
    },
    {
      id: 'email',
      name: 'Email',
      value: 'zuluarnold0@gmail.com'
    },
    {
      id: 'github',
      name: 'Github',
      value: 'https://github.com/azuluGithub'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/arnoldzulu-532539150'
    },
  ];

  const renderContact = (contact) => {
    const { name, value, id } = contact;

    return (
      <div className='About-Contact' key={id}>
        <div className='About-ContactContainer'>
          <span className='About-ContactKey'>{ name + ':' }</span>
          <span className='About-ContactValue'>{ value }</span>
        </div>
      </div>
    );
  }

  const renderContacts = () => {
    return (
      <div className='About-Contacts'>
        { contactsList.length && contactsList.map(renderContact) }
      </div>
    );
  }

  const renderQuote = () => {
    return (
      <div className='About-QuoteContainer'>
        <div className='About-VerticalSpacer'></div>
        <div className='About-ContentText'>
          {`“I have coded in C, PHP, Java, JavaScript and TypeScript. I have learnt Algorithms and Python. I wish to be good in Machine Learning and Artificial Intelligence. I want to build applications that will make impact on millions of lives.”`}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    return (
      <div className='About-Content'>
        <div className='About-ContentContainer'>
          <h2 className='About-ContentHeading'>{'About Me'}</h2>
          <Divider />
          <div className='About-SmallSpacer SmallDivider'></div>
          <Divider />
          { renderContacts() }
          <Divider />
          { renderQuote() }
        </div>
      </div>
    );
  }

  const renderImage = () => {
    const AboutImg = `${process.env.PUBLIC_URL}/assets/images/background/about-me.png`;
    
    return (
      <div className='About-ImageContainer'>
        <img
          className='About-Img' 
          src={AboutImg} 
          alt='about star arnold' 
        /> 
      </div>
    );
  }

  const renderComponents = () => {
    return (
      <div className='About-Components Split'>
        { renderImage() }
        { renderContent() }
      </div>
    );
  }

  const renderAbout = () => {
    return (
      <section className='About'>
        <div className='ContainerWrapper PaddedContainer'>
          { renderComponents() }
        </div>
      </section>
    );
  }

  return renderAbout();
}

export default AboutComponent;