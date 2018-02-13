import { 
  all,
  fork,
  } from 'redux-saga/effects'

/* This method is for when you have a 
* small number of sagas
* import { userSaga } from './users';
* import { accountSaga } from './accounts';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(accountSaga)
  ]);
}
*/


/*
import * to get all of the sagas

*/

import * as userSagas from './users';
import * as accountSagas from './accounts';

export default function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(accountSagas),
  ].map(fork));
}
