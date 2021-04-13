import {mealReducers} from './reducers';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  meals: mealReducers,
});

const store = createStore(rootReducer);
export {store};
