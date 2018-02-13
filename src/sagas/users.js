import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { 
  REQUEST_HELLO_WORLD,
  receiveHelloWorld,
  RECEIVE_API_DATA,
  receiveApiData,
  REQUEST_API_DATA
} from '../actions';

import { fetchData } from '../api';
//import HelloWorld from './reducers/helloWorld';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
//function* helloWorld(action) {
function* getApiData(action) {
   try {
      //  do api call
      const data = yield call(fetchData);
      console.log("USER CALL");
      
      //yield put (receiveHelloWorld("Hello World from redux saga"));
      yield put (receiveApiData(data));

   } catch (e) {
     console.log(e);
      //yield put (receiveHelloWorld("Hello World from redux saga"));
  }
}


export function* userSaga() {

  //yield takeLatest( REQUEST_HELLO_WORLD , helloWorld);
  yield takeLatest( REQUEST_API_DATA  ,getApiData);
}