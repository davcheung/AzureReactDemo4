import ContactInfo from "../components/meetups/ContactInfo";

function Contact() {
  function createPersonHandler(personData) {
    fetch("https://azuresendgridfunctions.azurewebsites.net/api/HttpExample" /* get sendgrid link and put it here */, {
      method: "POST",
      body: JSON.stringify(personData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("yeah we just sent something")
  }

  return (
    <section>
      <ContactInfo onCreatePerson={createPersonHandler} />
    </section>
  );
}

export default Contact;
