import React, { useRef }from "react";
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mct559b', 'template_y8miugc', form.current, 'jS2wi9dDjIkMspcVd')
          .then((result) => {
             console.log(result.text);
             e.target.reset();
             alert('Email sent !');
          }, (error) => {
             console.log(error.text);
        });
    };
    return ( 
        <section id="contactMe">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm"  ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="name" placeholder="Your Name"/>
                    <input type="email" name="from_email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    
                </form>
            </div>
        </section>
     );
}
 
export default Contact;