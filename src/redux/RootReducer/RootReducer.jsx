import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReducer from '../Login/Reducer/LoginReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userData'],
};

const RootReducer = combineReducers({
  loginReducer: persistReducer(persistConfig, LoginReducer),
});

export default RootReducer;