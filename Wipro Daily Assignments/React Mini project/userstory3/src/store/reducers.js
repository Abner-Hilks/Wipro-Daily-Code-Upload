import { ADD_BOOKING, CLEAR_BOOKINGS } from "./actions";

const initialState = {
  bookings: [],
};

export function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING:
      return { ...state, bookings: [...state.bookings, action.payload] };
    case CLEAR_BOOKINGS:
      return { ...state, bookings: [] };
    default:
      return state;
  }
}
