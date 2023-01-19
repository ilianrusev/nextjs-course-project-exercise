import EventList from "@/componets/events/EventList";
import EventsSearch from "@/componets/events/EventsSearch";
import { getAllEvents } from "dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
