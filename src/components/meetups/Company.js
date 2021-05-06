import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { Link } from 'react-router-dom';

function Company(props) {

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button><Link to='contact'>Solliciteren</Link></button>
        </div>
      </Card>
    </li>
  );
}

export default Company;
