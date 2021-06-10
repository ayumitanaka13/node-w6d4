import { useRouter } from "next/router";

import { getAllEvents } from "../../data";
import EventList from "../../components/events/event-list";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
