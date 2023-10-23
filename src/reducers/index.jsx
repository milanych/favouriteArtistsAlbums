import {combineReducers} from 'redux';
import albumReducer from './albumReducer';

const allReducers = combineReducers({
  albums: albumReducer,
})
export default allReducers
