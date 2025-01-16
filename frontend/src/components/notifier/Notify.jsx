import React, { useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Notify = ({ message, type, onClose, notified }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${
        notified
          ? "translate-y-0 opacity-100 popper"
          : "-translate-y-full opacity-0"
      } transition-all duration-700 z-20 py-2 top-4 relative`}
    >
      <div
        className={`bg-secondary shadow-md ${
          type === "success" ? "ring-green-500" : "ring-red-500"
        } ring-2 p-2 px-4 w-full rounded-3xl cursor-pointer flex items-center gap-2`}
        onClick={onClose}
      >
        {type === "success" ? (
          <div className="bg-green-500 p-1 rounded-full text-secondary w-fit">
            <FaCheck />
          </div>
        ) : (
          <div className="bg-red-500 p-1 rounded-full text-secondary">
            <FaTimes />
          </div>
        )}
        <div className="text-wrap ">{message}</div>
      </div>
    </div>
  );
};

export default Notify;
