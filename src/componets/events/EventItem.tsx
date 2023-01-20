import styles from "./EventItem.module.css";

import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Image from "next/image";

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
      <Image
        src={"/" + props.image}
        alt={props.title}
        width={250}
        height={160}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{props.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
