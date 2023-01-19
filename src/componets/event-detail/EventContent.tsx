import styles from "./EventContent.module.css";

function EventContent(props: any) {
  return <section className={styles.content}>{props.children}</section>;
}

export default EventContent;
