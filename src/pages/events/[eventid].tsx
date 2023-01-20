import EventContent from "@/componets/event-detail/EventContent";
import EventLogistics from "@/componets/event-detail/EventLogistics";
import EventSummary from "@/componets/event-detail/EventSummary";
import ErrorAlert from "@/componets/ui/ErrorAlert";
import { getEventById, getAllEvents } from "../../utils/api-util";
import { Fragment } from "react";

function EventDetailsPage(props) {
  const event = props.event;

  if (!event) {
    <ErrorAlert>
      return <p>No event found!</p>;
    </ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventid;

  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventid: event.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailsPage;
