import styles from "./ErrorAlert.module.css";

function ErrorAlert(props: any) {
  return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;
