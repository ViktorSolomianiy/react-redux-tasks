import { createSlice } from '@reduxjs/toolkit';

import { statusFilters } from 'redux/constants';

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        state.status = action.payload;
      },
      prepare(taskId) {
        return {
          payload: taskId,
        };
      },
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
