import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import './Cantact.css';
export default function Cantact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_65fygts',
        'template_sch6xys',
        form.current,
        'user_rhCMLoZOAWhNP1xIB23kW',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <div className="container cantact-form" id="#Cantact">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="Cantact-title mb-5">Contact Us</h2>
        </div>

        <form
          className="col-12 my-5 d-flex justify-content-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="form-row col-md-8 ">
            <div className="form-group col-md-6">
              <label for="inlineFormInput pl-2">Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="name"
                type="text"
                name="user_name"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4 pl-2">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <div className="form-group col-12">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
              />
            </div>

            <button
              type="submit"
              className=" btn submit mx-2 mb-5 mt-2"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
