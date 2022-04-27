import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import ButtonSubmit from './ButtonSubmit';

const ContactFormStyles = styled.form`
  width: var(--right-column-initial-width);

  @media ${device.laptopS} {
    width: var(--right-column-second-width);
  }

  @media ${device.tablet} {
    width: var(--right-column-final-width);
  }

  div {
    margin-bottom: 2.4rem;
  }

  label {
    color: var(--color-primary-grayish-blue-hex);
    font-family: 'PublicSans';
    font-size: 1.3rem;
    font-weight: var(--font-bold);
    margin-bottom: 0.8rem;
    opacity: 0.8;
  }

  input,
  textarea {
    background-color: var(--color-secondary-light-gray-hex);
    border: none;
    font-family: 'PublicSans';
    font-size: 1.3rem;
    padding: 1.65rem 1.6rem;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  textarea:focus,
  input:focus {
    outline: 1px solid var(--color-primary-cyan-hex);
  }

  input::placeholder,
  textarea::placeholder {
    font-family: 'PublicSans';
    color: var(--color-primary-grayish-blue-hex);
    opacity: 0.4;
  }
`;

const ContactForm = () => (
  <ContactFormStyles
    id="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    method="post"
    name="contact-form"
  >
    <input type="hidden" name="form-name" value="contact-form" />

    <div>
      <label htmlFor="name" name="name">
        Name
      </label>
      <br />
      <input
        aria-label="Name"
        id="name"
        name="name"
        placeholder="Jane Appleseed"
        required
        type="text"
      />
      <br />
    </div>

    <div>
      <label htmlFor="email" name="email">
        Email Address
      </label>
      <br />
      <input
        aria-label="Email"
        id="email"
        name="email"
        placeholder="email@example.com"
        required
        type="email"
      />
      <br />
    </div>

    <div>
      <label htmlFor="message" name="message">
        Message
      </label>
      <br />
      <textarea
        aria-label="Message"
        id="message"
        name="message"
        placeholder="How can I help?"
        required
        rows="4"
      />
      <br />
    </div>
    <ButtonSubmit className="submit-btn" isDark value="Send Message" />
  </ContactFormStyles>
);

export default ContactForm;
