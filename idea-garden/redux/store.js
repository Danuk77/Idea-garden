import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

// Store for storing the states of our UI elements
const store = configureStore({reducer : reducer});

export default store;