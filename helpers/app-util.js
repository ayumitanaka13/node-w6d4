export const getAllEvents = async () => {
  const response = await fetch(process.env.FIREBASE_DB);
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
