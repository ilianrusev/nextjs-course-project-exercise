import styles from "./CommentList.module.css";

function CommentList(props) {
  const { items } = props;

  if (items) {
    return (
      <ul className={styles.comments}>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
