export const transactionListSelector = createSelector([transactionsSelector], transactions => {
  const { entities, ids } = transactions;
  return ids.map(id => entities[id]);
});

import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');
