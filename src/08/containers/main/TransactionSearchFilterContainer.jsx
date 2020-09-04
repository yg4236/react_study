import { connect } from 'react-redux';
import TransactionSearchFilter from './TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackActions';

export default connect(null, { requestTransactionList })(TransactionSearchFilter);
