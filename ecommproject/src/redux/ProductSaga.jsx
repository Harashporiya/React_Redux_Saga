import { takeEvery, call, put } from 'redux-saga/effects';
import { PRODUCT_LIST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, SET_PRODUCT_LIST } from './Constant';

function* getProduct() {
  try {
    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const data = yield response.json();
  
    yield put({ type: PRODUCT_LIST_SUCCESS, payload: data });
    yield put({type:SET_PRODUCT_LIST,data});
  } catch (error) {
    console.error("API call failed", error);
    yield put({ type: PRODUCT_LIST_FAILURE, error });
  }
}

function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
}

export default ProductSaga;
