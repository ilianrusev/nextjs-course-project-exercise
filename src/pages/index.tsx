import EventList from "@/componets/events/EventList";
import { getFeaturedEvents } from "../utils/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList events={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
