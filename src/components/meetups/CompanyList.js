import Company from "./Company";
import classes from "./MeetupList.module.css";

function CompanyList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Company 
            key={meetup.id} 
            id={meetup.id} 
            image={meetup.image} 
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default CompanyList;
