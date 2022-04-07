import React from 'react';
import './contact.css';

import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine, RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>segunfaozan112@gmail.com</h5>
            <a href="mailto:segunfaozan@gmail.com" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>

          <article className="contact__option">
            <RiMessengerLine contact__option-icon/>
            <h4>Messenger</h4>
            <h5>Segunmaru Faozan</h5>
            <a href="https://web.facebook.com/" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>

          <article className="contact__option">
            <RiWhatsappFill contact__option-icon/>
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone+2348078754215" target = '_blank' rel="noreferrer">Send a Message</a>  
          </article>  
        </div>  

        <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name = 'email' placeholder = 'Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Mesage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact