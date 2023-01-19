import { getEventById } from "dummy-data";
import { useRouter } from "next/router";

function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>no event found</p>;
  }

  return (
    <div>
      <h1>event details</h1>
    </div>
  );
}

export default EventDetailsPage;
