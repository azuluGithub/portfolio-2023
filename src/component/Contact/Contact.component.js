import { useState } from 'react';

import './Contact.style.scss';


const Contact = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');

  const renderNames = () => {
    return (
      <div className='Contact-InputsContainer'>
        <input 
          type='text' 
          className='Contact-Input' 
          name='firstname' 
          value={firstname}
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type='text' 
          className='Contact-Input' 
          name='lastname' 
          value={lastname}
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    );
  }

  const renderMailAndSubject = () => {
    return (
      <div className='Contact-InputsContainer'>
        <input 
          type='text' 
          className='Contact-Input' 
          name='email' 
          value={email}
          placeholder='EMAIL'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='text' 
          className='Contact-Input' 
          name='subject' 
          value={subject}
          placeholder='SUBJECT'
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
    );
  }

  const renderMessage = () => {
    return (
      <textarea 
        className='Contact-TextArea'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    );
  }

  const renderContact = () => {
    return (
      <section className='Contact'>
        <div className='ContainerWrapper'>
          <h1 className='Contact-Heading'>{'contact'}</h1>
          <div className='Contact-SmallSpacer'></div>
          { renderNames() }
          { renderMailAndSubject() }
          { renderMessage() }
          <button className='Contact-Button'>{'Submit'}</button>
        </div>
      </section>
    );
  }

  return renderContact();
}

export default Contact; 
