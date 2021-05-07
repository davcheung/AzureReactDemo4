import Card from "../ui/Card";
import { useRef } from "react";
import { useState } from "react";
import Modal from "react-modal";

function ContactInfo(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const personData = {
      name: enteredName,
      email: enteredEmail,
    };

    props.onCreatePerson(personData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label>Naam: </label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>Versturen</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            Bedankt voor uw antwoord!
            <button onClick={() => setModalIsOpen(false)}> sluiten </button>
          </Modal>
        </div>
      </form>
    </Card>
  );
}

export default ContactInfo;
