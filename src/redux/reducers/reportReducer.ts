import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { reportWelcome } from "../actions"

const initialState: reportWelcome = {
    count: 0,
    next: "",
    previous: "",
    results: [],
  }

  export const fetchReports = createAsyncThunk('reports/fetchReports', async () => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/reports/`)
    const data = await response.json();
    return data;
  });
  
  const reportSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchReports.pending, () => {
            console.log("Attesa risposta fetch reports")
        })
        .addCase(fetchReports.fulfilled, (state, action: PayloadAction<reportWelcome>) => {
          return action.payload
        })
        .addCase(fetchReports.rejected, () => {
            console.log("Errore fetch report")
        })
    },
  })
  
  export default reportSlice.reducer