import axios from 'axios';
import {call, takeLatest, put} from 'redux-saga/effects';
import {userTypes, commonActions, salesActions} from '~redux/reducer';
import urlApp, {TIME_OUT} from '~constants';
import Config from 'react-native-config';


const userLogin = function* ({ payload: { params, onSuccess, onError } }) {
  yield console.log('call saga login');
  try {
    const variables = yield params;
    const linkApi  = Config?.API_URL + urlApp?.postUrl?.userLogin;
    const res = yield call(axios.post, linkApi, variables, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pkn',
      },
      timeout: TIME_OUT, 
    });
    const data = res.data; 

    if (res.status === 200) { 
      if (data?.statusCodes === 200) {
        onSuccess(data?.metadata);
      } else {
        yield onError(data);
      }
    } else {
      yield onError(data?.error || 'Unknown error');
    }
  } catch (err) {
    // Kiểm tra lỗi timeout
    if (err.code === 'ECONNABORTED') {
      yield onError({statusCodes: 408, message: 'Request timeout' });
    } else {
      yield onError({ message: err.message || 'Request error' });
    }
  }
};
// Quên mật khẩu
const forgotPassword = function* ({ payload: { params, onSuccess, onError } }) {
  yield console.log('call saga forgotPassword');
  try {
    const linkApi = Config?.API_URL + urlApp?.postUrl?.forgotPassword;
    const res = yield call(axios.post, linkApi, { Account: params?.Account }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pkn',
      },
      timeout: TIME_OUT,
    });

    const data = res.data;
    if (res.status === 200) {
      if (data?.statusCodes === 200) {
        onSuccess(data?.metadata);
      } else {
        yield onError(data);
      }
    } else {
      yield onError(data?.error || 'Unknown error');
    }
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      yield onError({ statusCodes: 408, message: 'Request timeout' });
    } else {
      yield onError({ message: err.message || 'Request error' });
    }
  }
};

const registerUser = function* ({ payload: { params, onSuccess, onError } }) {
  yield console.log('call saga registerUser');
  try {
    const linkApi = Config?.API_URL + urlApp?.postUrl?.registerUser;
    const res = yield call(axios.post, linkApi, params, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pkn',
      },
      timeout: TIME_OUT,
    });

    const data = res.data;
    if (res.status === 200) {
      if (data?.statusCodes === 200) {
        onSuccess(data?.metadata);
      } else {
        yield onError(data);
      }
    } else {
      yield onError(data?.error || 'Unknown error');
    }
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      yield onError({ statusCodes: 408, message: 'Request timeout' });
    } else {
      yield onError({ message: err.message || 'Request error' });
    }
  }
};

const changePassword = function* ({ payload: { params, onSuccess, onError } }) {
  yield console.log('call saga changePassword');
  try {
    const linkApi = Config?.API_URL + urlApp?.postUrl?.changePassword;
    const res = yield call(axios.post, linkApi,
       { 
        Account: params?.Account,
        OldPassword: params?.OldPassword,
        NewPassword: params?.NewPassword
       }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pkn',
      },
      timeout: TIME_OUT,
    });

    const data = res.data;
    if (res.status === 200) {
      if (data?.statusCodes === 200) {
        onSuccess(data?.metadata);
      } else {
        yield onError(data);
      }
    } else {
      yield onError(data?.error || 'Unknown error');
    }
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      yield onError({ statusCodes: 408, message: 'Request timeout' });
    } else {
      yield onError({ message: err.message || 'Request error' });
    }
  }
};
const userLogout = function* ({ payload: { params, onSuccess, onError } }) {
  yield console.log('call saga userLogout');
  try {
    const variables = yield params;
    const linkApi  = Config?.API_URL + urlApp?.postUrl?.userLogout;
    const res = yield call(axios.post, linkApi, variables, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pkn',
      },
      timeout: TIME_OUT, 
    });
    const data = res.data; 

    if (res.status === 200) { 
      if (data?.statusCodes === 200) {
        yield put (commonActions.cleanDataCommon());
        yield put (salesActions.cleanDataSales());
        yield onSuccess(data);
      } else {
        yield onError(data);
      }
    } else {
      yield onError(data?.error || 'Unknown error');
    }
  } catch (err) {
    // Kiểm tra lỗi timeout
    if (err.code === 'ECONNABORTED') {
      yield onError({statusCodes: 408, message: 'Request timeout' });
    } else {
      yield onError({ message: err.message || 'Request error' });
    }
  }
};
const watcher = function* () {
  yield takeLatest(userTypes.USER_LOGIN, userLogin);
  yield takeLatest(userTypes.USER_LOGOUT, userLogout);
  yield takeLatest(userTypes.FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(userTypes.REGISTER_USER, registerUser);
  yield takeLatest(userTypes.CHANGE_PASSWORD, changePassword);
};
export default watcher();
