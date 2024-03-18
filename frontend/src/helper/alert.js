import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "dark",
    draggable: true,
    progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    progress: undefined,
  });
};
