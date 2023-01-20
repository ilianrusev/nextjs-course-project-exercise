import EventList from "@/componets/events/EventList";
import EventsSearch from "@/componets/events/EventsSearch";
import { getAllEvents } from "../../utils/api-util";
import { useRouter } from "next/router";
import Head from "next/head";

function EventsPage(props) {
  const router = useRouter();
  const events = props.events;

  function findEventsHandler(year: string, month: string) {
    const fullPath: string = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
