// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import * as reduxSaga from 'redux-saga';
const createSagaMiddleware = reduxSaga.default;

import { persistStore, persistReducer } from 'redux-persist';
import { reduxStorage } from '~redux/store/reduxStorage'; 

import rootReducer from '~redux/reducer';
import rootSaga from '~redux/saga';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['user'], // chỉ persist reducer 'user'
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
