import Card from "../ui/Card";
import { useRef } from 'react';

function ContactInfo (props){
    const nameInputRef = useRef()
    const emailInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;

        const personData = {
            name: enteredName,
            email: enteredEmail
        }

        props.onCreatePerson(personData);
    }

    return <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label>Naam: </label>
                <input type='text' required id="name" ref={nameInputRef} />
            </div>
            <div>
                <label>Email: </label>
                <input type='text' required id="email" ref={emailInputRef} />
            </div>
        <div>
            <button>Versturen</button>
        </div>
        </form>
    </Card>

}

export default ContactInfo;