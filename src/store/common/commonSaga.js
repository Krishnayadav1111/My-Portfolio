import { call, put, takeLatest } from "redux-saga/effects";
import { commonActions } from "./commonActions";
import { commonConstants } from "./commonConstants";
import { commonService } from "./commonService";

function* fetchAllRolesCommonSaga() {
  try {
    const response = yield call(commonService.getAllRole);
    yield put(commonActions.fetchAllRolesSuccess(response.data));
  } catch (error) {
    yield put(commonActions.fetchAllRolesFailure(error));
  }
}

function* fetchCommonUserList(payload) {
  let data = payload;
  let roleName = data?.payload?.roleName;
  try {
    const response = yield call(
      commonService.getCommonUser,
      data?.payload?.roleId,
      data?.payload?.projectId
    );
    yield put(
      commonActions.fetchCommonUserListSuccess({
        [roleName] : response?.data,
      })
    );
  } catch (error) {
    yield put(commonActions.fetchCommonUserListFailure(error));
  }
}

export function* watchCommonSaga() {
  yield takeLatest(
    commonConstants.FETCH_ALL_COMMON_ROLES_SAGA,
    fetchAllRolesCommonSaga
  );
  yield takeLatest(
    commonConstants.FETCH_COMMON_USER_LIST_SAGA,
    fetchCommonUserList
  );
}
