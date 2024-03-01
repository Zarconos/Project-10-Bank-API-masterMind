// store.js

import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducers';

const store = configureStore({
    reducer: {
        storeData: storeReducer
    },
});

export default store;