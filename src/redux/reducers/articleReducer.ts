import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { articleWelcome } from "../actions"

const initialState: articleWelcome = {
    count: 0,
    next: "",
    previous: "",
    results: [],
  }

  export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
    const data = await response.json();
    return data;
  });
  
  const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticles.pending, () => {
            console.log("Attesa risposta fetch article")
        })
        .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<articleWelcome>) => {
          console.log("Fetch article success")
          return action.payload
        })
        .addCase(fetchArticles.rejected, () => {
            console.log("Errore fetch article")
        })
    },
  })
  
  export default articleSlice.reducer