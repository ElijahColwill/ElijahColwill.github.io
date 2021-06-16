import React, { useState } from 'react';
import "../../App.css";
import{ init, send } from 'emailjs-com';
init("user_DiHA4wAaWNtsM7Y1bGCub");

function Contact() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
      });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_e7fyswq',
          'template_mnhiogg',
          toSend,
          'user_DiHA4wAaWNtsM7Y1bGCub'
        )
        
        setToSend({ ...toSend, name: '', email: '', message: ''});
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='contact'>
            <div className='wrap-contact'>
            <form className='contact-form' onSubmit={onSubmit}>
                <h3>Contact Me</h3>
                <div className='wrap-input'>
                    <input type="text" name="name" placeholder='Full Name' className='input'
                    value={toSend.name} onChange={handleChange} required />
                </div>
                <div className='wrap-input'>
                    <input type="email" name="email" placeholder='Email' className='input'
                    value={toSend.email} onChange={handleChange} required />
                </div>
                <div className='wrap-input'>
                    <textarea name="message" placeholder='Message' className='textinput'
                    value={toSend.message} onChange={handleChange} required />
                </div>
                <button type='submit' className='btn-contact'>Submit <i class="fas fa-arrow-right" /></button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Contact
