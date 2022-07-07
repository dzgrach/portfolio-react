import { createSlice } from "@reduxjs/toolkit"

const AppSlice = createSlice({
  name: "app",
  initialState: {
    locale: "en"
  },
  reducers: {
    localeSwitched(state, action) {
      state.locale = action.payload.locale;
    }
  }
})

export const { localeSwitched } = AppSlice.actions
export default AppSlice.reducer
