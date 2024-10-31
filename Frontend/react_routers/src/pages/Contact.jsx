import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  event.preventDefault();
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);

    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save contact data");
    }
    console.log("Contact data saved successfully");
    alert("Message sent successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">Get in touch with us. We are always here to help you.</p>

      <div className="contact-form-container">
        <Form method="POST" action="/contact" onSubmit={contactData}>
          <div className="contact-grid">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Full Name</label>
              <input type="text" name="username" id="username" required autoComplete="off" placeholder="Enter full name" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" name="email" id="email" required autoComplete="off" placeholder="abc123@.com" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="We are always here to help you." className="form-textarea"></textarea>
          </div>

          <div className="form-submit">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </Form>
      </div>
    </section>
  );
};
