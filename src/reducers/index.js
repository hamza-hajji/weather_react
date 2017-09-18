import { combineReducers } from 'redux';
import  weatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  weatherReducer: weatherReducer
});

export default rootReducer;
