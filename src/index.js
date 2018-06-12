import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import DevTools from './components/DevTools';
import rootSaga from './sagas';
import App from './components/AppContainer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware), DevTools.instrument()));

sagaMiddleware.run(rootSaga);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  )
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/AppContainer', () => {
    render(App);
    render(require('./components/AppContainer'));
  })
}

