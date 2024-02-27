import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { infoWelcome } from "../actions"

const initialState: infoWelcome = {
  version:    "",
  news_sites: []
  }

  export const fetchInfo = createAsyncThunk('info/fetchInfo', async () => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/info/`)
    const data = await response.json()
    return data
  });
  
  const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchInfo.pending, () => {
            console.log("Attesa risposta fetch info")
        })
        .addCase(fetchInfo.fulfilled, (state, action: PayloadAction<infoWelcome>) => {
          console.log("Fetch info success")
          return action.payload
        })
        .addCase(fetchInfo.rejected, () => {
            console.log("Errore fetch info")
        })
    },
  })
  
  export default infoSlice.reducer