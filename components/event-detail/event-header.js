import classes from "./event-header.module.css";

const EventHeader = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventHeader;
