// import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Heading from '../../../doit-ui/Heading';
// import Card from '../../../doit-ui/Card';

// import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
// import TransactionTable from './TransactionTable';
// import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

// class TransactionList extends PureComponent {
//   componentDidMount() {
//     this.props.requestTransactionList();
//   }
//   render() {
//     const { transactions, loading } = this.props;

//     return (
//       <div>
//         <Router>
//           <Heading level={3}>거래 현황</Heading>
//           <Card vertical={4} horizontal={4}>
//             <TransactionSearchFilterContainer />
//           </Card>
//           <Card>
//             <TransactionTable transactions={transactions} isLoading={loading} />
//           </Card>
//           <TransactionPaginationContainer />
//         </Router>
//       </div>
//     );
//   }
// }

// TransactionList.defaultProps = {
//   transactions: [],
//   setTransactionList: () => {},
// };

// export default TransactionList;
import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {}

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Router>
          <Heading level={3}>거래 현황</Heading>
          <Card vertical={4} horizontal={4}>
            <TransactionSearchFilterContainer />
          </Card>
          <Card>
            <TransactionTable transactions={transactions} isLoading={loading} />
          </Card>
          <TransactionPaginationContainer />
        </Router>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
