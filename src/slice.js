import { createSlice } from "@reduxjs/toolkit"

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timer: 5,
    status: false,
    interval: "",
  },
  reducers: {
    decrement: (state) => {
      state.timer -= 1
    },
    clear: (state) => {
      state.timer = 5
      state.status = !state.status
    },
    changeInterval: (state, action) => {
      state.interval = action.payload
    },
  },
})

export const { decrement, clear, changeInterval } = timerSlice.actions
export default timerSlice.reducer
