import {createStore} from 'redux';
import RootReducer from './RootReducer/RootReducer';
import { persistStore } from 'redux-persist'

const store = createStore(
    RootReducer,
);

export const persistor = persistStore(store);

export default store;