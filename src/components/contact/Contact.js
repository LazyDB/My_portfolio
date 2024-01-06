import { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import the stylesheet for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    contactNumber: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert('Please fill in all fields.');
        return;
      }
    }

    // Replace with your Email.js user ID and template ID
    const userId = 'xX6P5venPs6098trk';
    const templateId = 'template_2nyqm3e';

    try {
      await emailjs.send('service_0vu55yk', templateId, formData, userId);
      alert('Email sent successfully!');
      setFormData({
        name: '',
        subject: '',
        contactNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
