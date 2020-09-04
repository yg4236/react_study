import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notifiactionEffects from '../middlewares/notificationEffects';
import transactionEffects from '../middlewares/transactionEffects';
import { middleware as reduxPackMiddleware } from 'redux-pack';

export default initState =>
  createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, notifiactionEffects, transactionEffects),
    ),
  );
