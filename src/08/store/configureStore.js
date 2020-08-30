import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';

// const customMiddleWare = store => nextRunner => action => {
//   console.log('미들웨어에 전달된 액션 객체', action);
//   console.log('리듀서 실행 전', store.getState());
//   const result = nextRunner(action);
//   console.log('리듀서 실행 후', store.getState());
//   return result;
// };

// const customMiddleWare2 = store => nextRunner => action => {
//   console.log('미들웨어2에 전달된 액션 객체', action);
//   console.log('미들웨어2 실행 전', store.getState());
//   const result = nextRunner(action);
//   console.log('미들웨어2 실행 후', store.getState());
//   return result;
// };
// export default initStates =>
//   createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools(applyMiddleware(customMiddleWare, customMiddleWare2)),
//   );

export default initState =>
  createStore(combineReducers(reducers), initState, composeWithDevTools(applyMiddleware(thunk)));
