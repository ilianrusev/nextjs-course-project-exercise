import EventContent from "@/componets/event-detail/EventContent";
import EventLogistics from "@/componets/event-detail/EventLogistics";
import EventSummary from "@/componets/event-detail/EventSummary";
import ErrorAlert from "@/componets/ui/ErrorAlert";
import { getEventById } from "dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailsPage() {
  const router = useRouter();

  const eventId = router.query.eventid;

  const event = getEventById(eventId);
  console.log(event);

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

export default EventDetailsPage;
