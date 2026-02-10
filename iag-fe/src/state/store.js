import {configureStore} from '@reduxjs/toolkit';
import currentWriter from './common/currentWriter';

export const store = configureStore({
    reducer: {
        currentWriter: currentWriter,
    }
})