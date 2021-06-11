import { useRouter } from "next/router";
import { getEventById } from "../../data";
import EventHeader from "../../components/event-detail/event-header";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div>
        <p>No event found!</p>
      </div>
    );
  }

  return (
    <div>
      <EventHeader title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export default EventDetailPage;
