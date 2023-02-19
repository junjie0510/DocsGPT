import { configureStore } from '@reduxjs/toolkit';
import { conversationSlice } from './conversation/conversationSlice';
import { prefSlice } from './preferences/preferenceSlice';

const store = configureStore({
  reducer: {
    preference: prefSlice.reducer,
    conversation: conversationSlice.reducer,
  },
});

export default store;
