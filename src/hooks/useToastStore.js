import { create } from "zustand";

let id = 0;

const TOAST_POSITIONS = [
  "top-right",
  "top-left",
  "top-center",
  "bottom-right",
  "bottom-left",
  "bottom-center",
];

const TOAST_STATUS = ["success", "error", "warning", "neutral"];

const DEFAULT_POSITION = "top-right";
const DEFAULT_STATUS = "neutral";

const useToastStore = create((set) => ({
  toasts: {},
  addToast: ({ title, msg, status, position, time }) => {
    title = title || "Title";
    msg = msg || "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    status = TOAST_STATUS.includes(status) ? status : DEFAULT_STATUS;
    position = TOAST_POSITIONS.includes(position) ? position : DEFAULT_POSITION;
    time = time || 5000;

    set((currentState) => {
      const newToast = { id: id++, time, title, msg, status };
      const toastsByPosition = currentState.toasts[position] || [];
      return {
        toasts: {
          ...currentState.toasts,
          [position]: [...toastsByPosition, newToast],
        },
      };
    });
  },
  removeToast: (toastId, position) =>
    set((currentState) => {
      const newToasts = (currentState.toasts[position] || []).filter(
        (t) => t.id !== toastId
      );
      return {
        toasts: {
          ...currentState.toasts,
          [position]: newToasts,
        },
      };
    }),
}));

export const toast = {
  success: (props) =>
    useToastStore.getState().addToast({ ...props, status: "success" }),
  error: (props) =>
    useToastStore.getState().addToast({ ...props, status: "error" }),
  warning: (props) =>
    useToastStore.getState().addToast({ ...props, status: "warning" }),
  neutral: (props) =>
    useToastStore.getState().addToast({ ...props, status: "neutral" }),
};
export default useToastStore;
