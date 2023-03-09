import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from '../redux/slices/tasksSlice';
import { filtersReducer } from '../redux/slices/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
