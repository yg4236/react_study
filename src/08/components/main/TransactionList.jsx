import React, { PureComponent } from 'react';
import Api from '../../Api';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilter from '../../containers/main/TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  componentDidMount() {
    Api.get('/transaction').then(({ data }) => this.props.setTransactionList(data));
  }
  render() {
    const { transactions } = this.props;

    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transaction: [],
  setTransactionList: () => {},
};

export default TransactionList;
