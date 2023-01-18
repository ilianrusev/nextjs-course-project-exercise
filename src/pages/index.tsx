import EventList from "@/componets/events/EventList";
import { getFeaturedEvents } from "dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
