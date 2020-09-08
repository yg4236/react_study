import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';
import { createSelector } from 'reselect';

export const transactionsSelector = state => state.transactions;
export const transacionListSelector = state => {
  const { ids, entities } = transactionsSelector(state);
  return entities.map(id => entities[id]);
};
export const transactionListSelector = createSelector([transactionsSelector], transactions => {
  const { entities, ids } = transactions;
  return ids.map(id => entities[id]);
});
export const loadingStateSelector = state => transactionsSelector(state).loadingState;

export const transactionListLoadingStateSelector = state =>
  loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
export const transactionCreateLoadingStateSelector = state =>
  loadingStateSelector(state)[CREATE_TRANSACTION];
