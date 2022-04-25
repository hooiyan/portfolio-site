import React from 'react';
import Border from '../components/Border';
import ContactForm from '../components/ContactForm';
import ContactPitch from '../components/ContactPitch';
import Seo from '../components/Seo';
import TwoColumn from '../components/TwoColumn';

const ContactPage = () => (
  <>
    <Seo title="Contact" />
    <section>
      <Border />
      <TwoColumn>
        <h2 className="title">Get In Touch</h2>
        <ContactPitch />
      </TwoColumn>
      <Border />
    </section>
    <TwoColumn>
      <h2 className="title">Contact Me</h2>
      <ContactForm />
    </TwoColumn>
  </>
);

export default ContactPage;
