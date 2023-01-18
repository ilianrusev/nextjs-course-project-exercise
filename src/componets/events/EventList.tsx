import EventItem from "./EventItem";

function EventList(props: any) {
  return (
    <ul>
      {props.events.map((event: any) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
