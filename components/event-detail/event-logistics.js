import classes from "./event-logistics.module.css";

const EventLogistics = (props) => {
  const { date, location, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <date>{humanReadableDate}</date>
        <address>{addressText}</address>
      </ul>
    </section>
  );
};

export default EventLogistics;
