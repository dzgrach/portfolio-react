import { createSlice } from "@reduxjs/toolkit"

const ArticlesSlice = createSlice({
  name: "app",
  initialState: [],
  reducers: {
    articlesFetched(state: any[], action) {
      state.splice(0);
      state.push(...action.payload.articles);
    }
  }
})

export const { articlesFetched } = ArticlesSlice.actions
export default ArticlesSlice.reducer
