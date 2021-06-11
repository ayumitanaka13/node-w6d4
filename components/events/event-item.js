import classes from "./event-item.module.css";
import Button from "../UI/button";

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{date}</time>
          </div>
          <div className={classes.address}>{location}</div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>👉</span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
