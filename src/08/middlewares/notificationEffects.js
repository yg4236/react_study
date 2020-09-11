// import { SET_ERROR } from '../actions/transactionActions';
// import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
// import { debounce } from '../../02/debounce';
// import { KEY, LIFECYCLE } from 'redux-pack';
// import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

// const debounceRunner = debounce(action => action(), 4000);

// export default store => nextRunner => action => {
//   const { type, meta } = action;
//   const result = nextRunner(action);
//   if (meta && meta.notification) {
//     const { success, error } = meta.notification;
//     if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
//       store.dispatch(showMessage(success));
//     } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
//       store.dispatch(showMessage(error, true));
//     }
//   }
//   return nextRunner(action);
// };

import { KEY, LIFECYCLE } from 'redux-pack';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';

const debounceRunner = debounce(action => action(), 4000);

export default store => nextRunner => action => {
  const { type, payload, meta } = action;
  const result = nextRunner(action);
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      const { errorMessage } = payload.response ? payload.response.data : {};
      store.dispatch(showMessage(errorMessage || error, true));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }
  return result;
};
