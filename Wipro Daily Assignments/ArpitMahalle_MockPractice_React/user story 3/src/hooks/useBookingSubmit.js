import { useDispatch } from "react-redux";
import { addBooking } from "../store/actions";
import axios from "axios";

// central hook for booking submission
export default function useBookingSubmit() {
  const dispatch = useDispatch();

  const submitBooking = async (values, resetForm, setStatus) => {
    try {
      // Add booking to Redux state
      dispatch(addBooking(values));

      // Optional: send to json-server
      await axios.post("http://localhost:5000/bookings", values);

      setStatus({ success: "Booking successful!" });
      resetForm();
    } catch (error) {
      setStatus({ error: "Failed to submit booking" });
    }
  };

  return submitBooking;
}
