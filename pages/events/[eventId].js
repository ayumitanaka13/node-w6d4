import { useRouter } from "next/router";
import { getEventById } from "../../data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <p>No event found!</p>
      </>
    );
  }

  return (
    <>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <img src={"/" + event.image} alt="" />
      <p>{event.description}</p>
    </>
  );
};

export default EventDetailPage;
