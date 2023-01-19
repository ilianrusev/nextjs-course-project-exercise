import EventList from "@/componets/events/EventList";
import EventsSearch from "@/componets/events/EventsSearch";
import { getAllEvents } from "dummy-data";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year: string, month: string) {
    const fullPath: string = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
