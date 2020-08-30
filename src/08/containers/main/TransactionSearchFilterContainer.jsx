import { connect } from 'react-redux';
import TransactionSearchFilter from './TransactionSearchFilter';
import { requsetTransactionList } from '../../actions/transactionActions';

export default connect(null, { requsetTransactionList })(TransactionSearchFilter);
