import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import {
  transactionListLoadingStateSelector,
  loadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = state => {
  return { transactions: transactionListSelector(state), loading: loadingStateSelector(state) };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
