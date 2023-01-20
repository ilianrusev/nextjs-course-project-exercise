import EventList from "@/componets/events/EventList";
import ResultsTitle from "@/componets/events/ResultsTitle";
import ErrorAlert from "@/componets/ui/ErrorAlert";
import Button from "@/componets/ui/Button";
import { getFilteredEvents } from "../../utils/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function FilteredEventsPage(props) {
  // const router = useRouter();

  // const filterData = router.query.slug;   // can be used for client-side fetching with useState and useEffect

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const numYear: number = +filterData[0];
  // const numMonth: number = +filterData[1];

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${props.date.month}/${props.date.year}`}
      />
    </Head>
  );

  if (props.hasError) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter.</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No events Found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const numYear: number = +filterData[0];
  const numMonth: number = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
