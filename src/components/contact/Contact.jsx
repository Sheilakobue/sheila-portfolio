import './Contact.css';
import { Fragment } from 'react';


import ContactForm from '../contact/contact-form';

function Contact() {
  return (
    <Fragment>
      
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      
      <ContactForm />
    </Fragment>
  );
}

export default Contact;