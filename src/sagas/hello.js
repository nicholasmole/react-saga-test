import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { 
  REQUEST_HELLO_WORLD,
  receiveHelloWorld,
  RECEIVE_API_DATA,
  receiveApiData,
  REQUEST_API_DATA
} from '../actions';

import { fetchData } from '../api';

// Second Saga
function* getApiData2(action) {
  try {
     //  do api call
     const data = yield call(fetchData);
     //yield put (receiveHelloWorld("Hello World from redux saga"));
     yield put (receiveApiData(data));
  } catch (e) {
    console.log(e);
     //yield put (receiveHelloWorld("Hello World from redux saga"));
 }
}

// Second Saga
export function* mySaga2() {
  //yield takeLatest( REQUEST_HELLO_WORLD , helloWorld);
  yield takeLatest( 'SOME_ACTION' , getApiData2);
}
