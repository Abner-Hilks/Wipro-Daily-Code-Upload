export const ADD_BOOKING = "ADD_BOOKING";
export const CLEAR_BOOKINGS = "CLEAR_BOOKINGS";

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  payload: booking,
});

export const clearBookings = () => ({
  type: CLEAR_BOOKINGS,
});
