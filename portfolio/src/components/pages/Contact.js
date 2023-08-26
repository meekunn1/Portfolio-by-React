import React from "react";

export default function Contact() {
  return (
    <div class='container mb-4 mt-4'>
      <form>
        <div className='form-group '>
          <h2>Contact</h2>
          <label for='contactInputName'>Name</label>
          <input type='text' className='form-control' id='contactInputName' />
        </div>
        <div className='form-group '>
          <label for='contactInputEmail'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='contactInputEmail'
            placeholder='name@example.com'
          />
        </div>
        <div className='form-group'>
          <label for='contactInputMessage'>Message</label>
          <textarea
            className='form-control'
            id='contactInputMessage'
            rows='3'
          ></textarea>
        </div>
      </form>
    </div>
  );
}
