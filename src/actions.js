export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECEIVE_HELLO_WORLD = 'RECEIVE_HELLO_WORLD';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestHelloWorld = () => ({type: REQUEST_HELLO_WORLD});
export const receiveHelloWorld = text => ({type: RECEIVE_HELLO_WORLD, text});

export const requestApiData = () => ({type: REQUEST_API_DATA});
export const receiveApiData = (data,isLoading) => ({type: RECEIVE_API_DATA, isLoading, data});