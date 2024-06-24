import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    items: [
      // Example student data
      {
        id: 1,
        name: 'Alice Johnson',
        courses: [
          {
            id: 1,
            name: 'Introduction to React Native',
            instructor: 'John Doe',
            dueDate: '2024-08-30',
            progress: 70,
          },
          // Additional courses...
        ],
      },
      // Additional students...
    ],
  },
  reducers: {},
});

export default studentsSlice.reducer;
