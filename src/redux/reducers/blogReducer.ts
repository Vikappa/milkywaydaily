import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { blogWelcome } from "../actions"

const initialState: blogWelcome = {
    count: 0,
    next: "",
    previous: "",
    results: [],
  }

  export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/`)
    const data = await response.json();
    return data;
  });
  
  const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBlogs.pending, () => {
            console.log("Attesa risposta fetch blogs")
        })
        .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<blogWelcome>) => {
          return action.payload
        })
        .addCase(fetchBlogs.rejected, () => {
            console.log("Errore fetch blogs")
        })
    },
  })
  
  export default blogSlice.reducer