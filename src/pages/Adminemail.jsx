import React, { useRef } from 'react'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Adminemail() {
   
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ap4omjg', 'template_f4ejwsi', form.current, {
            publicKey: 'hW5hJNG80zbsuCtRO',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <>
     <form className='mt-5 p-5 flex-column' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    
    
    </>
  )
}

export default Adminemail