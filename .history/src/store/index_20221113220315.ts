import { legacy_createStore } from 'redux';
import reducer from './'

const store = legacy_createStore(reducer);

export default store;