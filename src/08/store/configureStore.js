import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
//import { SET_TRANSACTION_LIST } from '../actions/transactionActions';

// const customMiddleWare1 = () => nextRunner => action => {
//   if (action.type === SET_TRANSACTION_LIST) {
//     return nextRunner({
//       ...action,
//       payload: [
//         {
//           id: 0,
//           code: 'DOIT',
//           name: '두잇코인(DOIT)',
//           totalPrice: 1000000000,
//           currentPrice: 25000,
//           datetime: '현재시간',
//         },
//       ],
//     });
//   }
//   return nextRunner(action);
// };

const customMiddleWare = store => nextRunner => action => {
  console.log('미들웨어에 전달된 액션 객체', action);
  console.log('리듀서 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행 후', store.getState());
  return result;
};

const customMiddleWare2 = store => nextRunner => action => {
  console.log('미들웨어2에 전달된 액션 객체', action);
  console.log('미들웨어2 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('미들웨어2 실행 후', store.getState());
  return result;
};
export default initStates =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(applyMiddleware(customMiddleWare, customMiddleWare2)),
  );
