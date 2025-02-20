function Contact() {
  return (
    <article className="contact-card">
      <img src="src/img/mr-whiskerson.png" alt="Photo of Mr. Whiskerson" />
      <h3>Mr. Whiskerson</h3>

      <div className="info-group">
        <img src="src/img/phone-icon.png" alt="phone icon" />
        <p>(212) 555-1234</p>
      </div>

      <div className="info-group">
        <img src="src/img/mail-icon.png" alt="mail icon" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </article>
  );
}

export default Contact;
