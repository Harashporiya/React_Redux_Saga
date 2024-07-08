import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import RootReducer from './RootReducer';
import ProductSaga from './ProductSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const Store = configureStore(
      {
            reducer:RootReducer,
            middleware:()=>[sagaMiddleware]
      }

);

sagaMiddleware.run(ProductSaga)
export default Store;
