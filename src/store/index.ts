import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer";

const store = configureStore({
  reducer: appReducer.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
