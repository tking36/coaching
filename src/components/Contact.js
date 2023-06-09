import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

    emailjs.sendForm('service_0cekjhp', 'template_xcrd6ah', form.current, 'PW_cj8Md17pZ2VMYw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="email-form">
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={name} onChange={handleNameChange} />
        <label>Email</label>
        <input type="email" name="user_email" value={email} onChange={handleEmailChange} />
        <label>Message</label>
        <textarea className='message-area' name="message" value={message} onChange={handleMessageChange}/>
        <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default Contact;



