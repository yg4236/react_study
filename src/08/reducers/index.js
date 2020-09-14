import notification from './notifiactionReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';
import router from './routerReducer';

const apiReducers = createReducers('transactions', 'users');

export default {
  ...apiReducers,
  notification,
  searchFilter,
  router,
};
