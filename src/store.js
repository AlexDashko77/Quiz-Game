import { configureStore } from "@reduxjs/toolkit"
import timerSlice from "./slice"

const store = configureStore({
  reducer: {
    timer: timerSlice,
  },
})

export default store
