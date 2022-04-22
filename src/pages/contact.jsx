import React from 'react';
import Border from '../components/Border';
import ContactForm from '../components/ContactForm';
import ContactPitch from '../components/ContactPitch';
import TwoColumn from '../components/TwoColumn';

const ContactPage = () => (
  <>
    <section>
      <Border />
      <TwoColumn title="Get In Touch">
        <ContactPitch />
      </TwoColumn>
      <Border />
    </section>
    <TwoColumn title="Contact Me">
      <ContactForm />
    </TwoColumn>
  </>
);

export default ContactPage;
