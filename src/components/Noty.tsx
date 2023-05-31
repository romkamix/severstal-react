import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePrevious } from "../utils";
import { selectNoties } from "../store";

function Noty() {
  const noties = useSelector(selectNoties),
    prevNoties = usePrevious(noties);

  useEffect(() => {
    noties
      .slice(prevNoties !== undefined ? prevNoties.length : 0)
      .forEach((n) => {
        switch (n.type) {
          case "info":
            toast.info(n.title);
            break;

          case "success":
            toast.success(n.title);
            break;

          case "warn":
            toast.warning(n.title);
            break;

          case "error":
            toast.error(n.title);
            break;

          default:
            toast(n.title);
            break;
        }
      });
  }, [noties, prevNoties]);

  return <ToastContainer theme="colored" />;
}

export default Noty;
