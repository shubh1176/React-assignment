import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCoursesFromAPI } from '../api';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await fetchCoursesFromAPI();
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    incrementLikes: (state, action) => {
      const course = state.items.find(course => course.id === action.payload);
      if (course) {
        course.likes += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { incrementLikes } = coursesSlice.actions;

export default coursesSlice.reducer;
