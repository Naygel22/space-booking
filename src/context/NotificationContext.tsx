import { useContext } from "react"
import { createContext } from "react"
import { Bounce, ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

type NotificationType = "success" | "error";

export type NotificationContextProps = {
  notify: (message: string, type: NotificationType) => void
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {

  const notify = (message: string, type: NotificationType) => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce
        });
        break;
      case "error":
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        break;
      default:
        toast(message);
    }
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext)

  if (!ctx) {
    throw new Error("Missing NotificationContext, it's not wrapped in with Provider")
  }
  return ctx
}
