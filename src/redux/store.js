import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterssReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterssReducer,
  },
});
