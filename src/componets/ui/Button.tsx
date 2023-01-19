import Link from "next/link";

import styles from "./Button.module.css";

function Button(props: any) {
  return (
    <Link href={props.link} className={styles.btn}>
      {props.children}
    </Link>
  );
}

export default Button;
