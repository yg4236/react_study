import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';

import AppLayout from './components/AppLayout';
import configureStore from './store/configureStore';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <ModalProvider>
            <AppLayout>
              <CoinOverview />
              <TransactionListContainer />
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
