import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  // Define a state variable 'formData' to store form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Event handler to update form data when input fields change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler to submit the form
  const handleSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if any of the required fields are empty
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Prepare email template parameters using form data
    const templateParams = {
      to_name: "Recipient Name",
      from_name: `${formData.fname} ${formData.lname}`, // Combine first name and last name
      from_email: formData.email, // Use the email from the form
      message: formData.message, // Use the message from the form
      mobileNumber: formData.mobile,
    };

    // Send email using EmailJS API
    emailjs
      .send(
        "service_ue68jvs", // EmailJS service ID
        "template_oig5m6f", // EmailJS template ID
        templateParams, // Parameters for the email template
        "FPqOh1RH6U4HXWWWz" // EmailJS user ID (API key)
      )
      .then(
        // Handle success response
        result => {
          console.log(result.text); // Log the response
          alert("Message sent successfully!"); // Show success message
        },
        // Handle error response
        error => {
          console.log(error.text); // Log the error
          alert("Failed to send the message, please try again."); // Show error message
        }
      );

    // Reset form data after submission
    setFormData({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  // Render the contact form
  return (
    <div className="contact" id="contact">
      <h1>
        <span>Contact</span> Me!
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for first name, last name, email, mobile number, and message */}
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="tel"
          id="mobile"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <br />
        {/* Submit button */}
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Contact;
