import { createPortal } from "react-dom";
import useToastStore from "../../hooks/useToastStore";
import Toast from "../Toast/Toast";
import styles from "../Toast/Toast.module.css";

export default function ToastContainer() {
  // Use a selector to get the toasts array and the removeToast action
  const toastsByPosition = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, toasts]) => {
        if (!toasts || toasts.length === 0) return null;

        const positionClass = position && styles[position];
        const allClasses = [styles["toast-container"], positionClass]
          .filter(Boolean)
          .join(" ");

        // Use a portal to render the container outside the main app DOM tree
        return createPortal(
          <div key={position} className={allClasses}>
            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                onDismiss={() => removeToast(toast.id, position)}
              />
            ))}
          </div>,
          document.body
        );
      })}
    </>
  );
}
