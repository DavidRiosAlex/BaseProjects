import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sagas from '../sagas/sagas';
import home from '../../Home/reducers/reducer';

const store = configureStore({
    reducer: combineReducers({
        home
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagas.middleware)
})

sagas.initializer()


export default store;