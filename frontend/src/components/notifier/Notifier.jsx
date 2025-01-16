import React, { useState } from "react";
import Notify from "./Notify";

let notify = null;
const Notifier = () => {
  const [notifiers, setNotifiers] = useState([]);

  const addNotification = (message, type) => {
    const id = Date.now();
    const currentNotifiers = [...notifiers];
    currentNotifiers.unshift({id,message,type,notified : true});
    setNotifiers(currentNotifiers);
  };

  const removeNotification = (id) => {
    setNotifiers((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, notified: false }
          : notification
      )
    );
    setTimeout(() => {
      setNotifiers((prev) => prev.filter((notification) => notification.id !== id));
    }, 700);
  };

  notify = {
    success: (message) => addNotification(message, "success"),
    error: (message) => addNotification(message, "error"),
  };

  return (
    <div className="bg-transparent  fixed top-0 left-0 right-0 w-fit  m-auto z-40 flex items-center justify-center flex-col">
      {notifiers.map((notifier) => (
        <Notify
          key={notifier.id}
          message={notifier.message}
          type={notifier.type}
          notified={notifier.notified}
          onClose={() => removeNotification(notifier.id)}
        />
      ))}
    </div>
  );
};

export default Notifier;
export {notify};
