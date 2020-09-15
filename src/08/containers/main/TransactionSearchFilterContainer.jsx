import { connect } from 'react-redux';
import TransactionSearchFilter from './TransactionSearchFilter';
// import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
//import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = state => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps)(TransactionSearchFilter);
