import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Button from './Button';

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
    method="post"
    name="contact"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="text" name="hidden" id="hidden" hidden />

    <div>
      <label htmlFor="name" name="name">
        Name
      </label>
      <br />
      <input type="text" id="name" placeholder="Jane Appleseed" required />
      <br />
    </div>

    <div>
      <label htmlFor="email" name="email">
        Email Address
      </label>
      <br />
      <input type="email" id="email" placeholder="email@example.com" required />
      <br />
    </div>

    <div>
      <label htmlFor="message" name="message">
        Message
      </label>
      <br />
      <textarea id="message" rows="4" placeholder="How can I help?" required />
      <br />
    </div>
    <button type="submit">SEND MESSAGE</button>
    {/* <Button isDark value="Send Message" /> */}
  </FormStyles>
);

export default ContactForm;
