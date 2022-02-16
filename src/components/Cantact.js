import emailjs from "emailjs-com";
import React, { useRef } from "react";
import "./Cantact.css";
export default function Cantact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65fygts",
        "template_sch6xys",
        form.current,
        "user_rhCMLoZOAWhNP1xIB23kW"
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
    <div className="container d-flex justify-content-center">
      <form className="col-12" ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inlineFormInput">Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="name"
              type="text"
              name="user_name"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              name="user_email"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
            />
          </div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
