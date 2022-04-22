import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import ButtonSubmit from './ButtonSubmit';

const FormStyles = styled.form`
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
    opacity: 0.8;
    margin-bottom: 0.8rem;
  }

  input,
  textarea {
    background-color: rgba(32, 58, 76, 0.1);
    border: none;
    font-family: 'PublicSans';
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
  <FormStyles
    id="contact"
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact-form" />

    <div>
      <label htmlFor="name" name="name">
        Name
      </label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        aria-label="Name"
        placeholder="Jane Appleseed"
        required
      />
      <br />
    </div>

    <div>
      <label htmlFor="email" name="email">
        Email Address
      </label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        aria-label="Email"
        placeholder="email@example.com"
        required
      />
      <br />
    </div>

    <div>
      <label htmlFor="message" name="message">
        Message
      </label>
      <br />
      <textarea
        id="message"
        name="message"
        aria-label="Message"
        rows="4"
        placeholder="How can I help?"
        required
      />
      <br />
    </div>
    <ButtonSubmit isDark value="Send Message" />
  </FormStyles>
);

export default ContactForm;
