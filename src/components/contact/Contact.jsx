import React, { useRef } from "react";
import "./contact.css";
import { contactdata } from "./contactdata";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5npgx3n",
        "template_hao4xvp",
        form.current,
        "LcdluC7Gb7Bfm2AHj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactdata.map((e) => {
            return (
              <article className="contact__option">
                {e.icon}
                <h4>{e.method}</h4>
                <h5>{e.methoddetail}</h5>
                <a href={e.adress} target="_blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
