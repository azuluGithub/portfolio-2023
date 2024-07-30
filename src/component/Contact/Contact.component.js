import { useState } from 'react';

import Divider from '../Divider';
import './Contact.style.scss';

const Contact = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ submitted, setSubmitted ] = useState(false);

  const renderNames = () => {
    return (
      <div className='Contact-InputsContainer'>
        <input 
          type='text' 
          className='Contact-Input FormInput' 
          name='firstname' 
          value={firstname}
          placeholder='FIRST NAME'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type='text' 
          className='Contact-Input FormInput' 
          name='lastname' 
          value={lastname}
          placeholder='LAST NAME'
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
          className='Contact-Input FormInput' 
          name='email' 
          value={email}
          placeholder='EMAIL'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='text' 
          className='Contact-Input FormInput' 
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
        className='Contact-TextArea FormTextArea'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    );
  }

  const renderContact = () => {
    return (
      <section className='Contact' id='contact'>
        <div className='ContainerWrapper PaddedContainer'>
          <h1 className='Contact-Heading TextCenter'>{'contact'}</h1>
          <Divider />
          <div className='Contact-SmallSpacer SmallDivider'></div>
          <Divider />
          { renderNames() }
          { renderMailAndSubject() }
          { renderMessage() }
          <Divider />
          <button className='Contact-Button Button' onClick={() =>setSubmitted(true)}>{'Submit'}</button>
          {submitted && <p className='Contact-Error'>Oooops... Something went wrong!</p>}
        </div>
      </section>
    );
  }

  return renderContact();
}

export default Contact; 
