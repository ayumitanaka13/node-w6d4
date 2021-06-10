const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Kumano Fireworks Festival",
    description:
      "The Kumano Fireworks Festival, held every August 17, takes place at the perfect summer locale: the beach. After a day checking out the sights around Shichiri Mihama Beach , take in this fantastic fireworks show, a 300-year festival presented as part of the local Obon festivities.",
    location: "Atawa,Mihama, Minamimuro-gun, Mie-ken",
    date: "2021-08-17",
    image: "images/fireworks-event.jpeg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Carnival in Rio de Janeiro",
    description:
      "From feathery costumes, elaborate parade floats to a non-stop extravaganza of drums, dance and debauchery, few things say festivity like ‘Carnival’! Although it’s celebrated right across Brazil and other Catholic countries, Rio de Janeiro has long been regarded as the place to experience Carnival, drawing millions of event-goers every year.",
    location: "Rio de Janeiro, Brazil",
    date: "2022-02-25",
    image: "images/carnival-event.jpeg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Dia De Los Muertos",
    description:
      "Translated to ‘Day of the Dead’, this seemingly morbid festivity is a day to celebrate and remember those who have passed away with parades, costumes, paper decorations and edible skulls. It is believed that the spirits of the dead visit their families on October 31 and leave on November 2, so many spend this time visiting cemeteries – where there is often music and dances to honour the spirits.",
    location: "Mexico",
    date: "2021-10-31",
    image: "images/Day-of-the-Dead-event.jpeg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
