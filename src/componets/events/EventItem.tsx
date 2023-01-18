import styles from "./EventItem.module.css";

import Link from "next/link";

function EventItem(props: any) {
  const readableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress: string = props.location.replace(", ", "\n");
  const exploreLink: string = `/events/${props.id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + props.image} alt={props.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{props.title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
