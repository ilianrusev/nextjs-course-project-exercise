import NotificationContext from "@/store/NotificationContext";
import { Fragment, useContext } from "react";
import Notification from "../ui/Notification";
import MainHeader from "./MainHeader";

function Layout(props) {
  const notifCtx = useContext(NotificationContext);

  const activeNotif = notifCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotif && (
        <Notification
          title={activeNotif.title}
          message={activeNotif.message}
          status={activeNotif.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
