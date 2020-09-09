import notification from './notifiactionReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';

const apiReducers = createReducers('transactions');

export default {
  ...apiReducers,
  notification,
  searchFilter,
};
