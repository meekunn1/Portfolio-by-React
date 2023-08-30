import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setComment("");
    alert("Submitting feature is still under construction. Sorry.");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div class='container mb-4 mt-4'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          placeholder='Your name here'
          value={name}
          className='form-control '
          onChange={handleNameChange}
          required
        ></input>
        <div className='form-group '>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            value={email}
            placeholder='name@example.com'
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='form-group'>
          <label for='contactInputMessage'>Message</label>
          <textarea
            type='text'
            className='form-control'
            id='contactInputMessage'
            rows='3'
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}
