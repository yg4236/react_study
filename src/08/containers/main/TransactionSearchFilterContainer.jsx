import { connect } from 'react-redux';
import TransactionSearchFilter from './TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);
