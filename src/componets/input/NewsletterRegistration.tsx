import NotificationContext from "@/store/NotificationContext";
import { useContext, useRef } from "react";
import styles from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const notifCtx = useContext(NotificationContext);

  function registrationHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notifCtx.showNotification({
      title: "Signing up...",
      messge: "Registering for newsletter",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        notifCtx.showNotification({
          title: "Success",
          messge: "Successfully registered",
          status: "success",
        });
      })
      .catch((error) => {
        notifCtx.showNotification({
          title: "Error",
          messge: error.message || "something went wrong",
          status: "error",
        });
      });
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
