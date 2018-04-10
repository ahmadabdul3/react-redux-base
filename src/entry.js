import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MainRouter from 'srcRoot/router/router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'srcRoot/redux';
import thunk from 'redux-thunk';

const initialState = {};
let store = undefined;
store = createStore(reducer, initialState, applyMiddleware(thunk));


if (typeof window !== 'undefined') {
  ReactDom.render(
    <Provider store={store}>
      <MainRouter store={store} />
    </Provider>,
    document.getElementById('entry-point')
  );
}
