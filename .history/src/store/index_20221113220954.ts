import { legacy_createStore } from 'redux';
import reducer from './reducer.ts';

//创建shu'ju
const store = legacy_createStore(reducer);

export default store;