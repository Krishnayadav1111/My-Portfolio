import { commonConstants } from "./commonConstants";
const commonActions = {};

commonActions.setToast = (success, message) => ({
  type: commonConstants.GLOBAL_SET_TOAST_DATA,
  payload: { success, message },
});

commonActions.resetToast = () => ({
  type: commonConstants.GLOBAL_RESET_TOAST_DATA,
});

commonActions.updateLoader = (loading) => ({
  type: commonConstants.GLOBAL_LOADER_DATA,
  payload:loading,
});

commonActions.fetchAllRolesSaga = () => ({
  type: commonConstants.FETCH_ALL_COMMON_ROLES_SAGA,
});

commonActions.fetchAllRolesSuccess = (roles) => ({
  type: commonConstants.FETCH_ALL_COMMON_ROLES_SUCCESS,
  payload: roles,
});

commonActions.fetchAllRolesFailure = (error) => ({
  type: commonConstants.FETCH_ALL_COMMON_ROLES_FAILURE,
  payload: error,
});

commonActions.fetchCommonUserList = (roleId , projectId , roleName) => ({
  type: commonConstants.FETCH_COMMON_USER_LIST_SAGA,
  payload : {roleId , projectId , roleName}
});

commonActions.fetchCommonUserListSuccess = (data) => ({
  type: commonConstants.FETCH_COMMON_USER_LIST_SUCCESS,
  payload : data,
});

commonActions.fetchCommonUserListFailure = (data) => ({
  type: commonConstants.FETCH_COMMON_USER_LIST_FAILURE,
  payload : data ,  
})
commonActions.resetCommonState = () => ({
  type:commonConstants.RESET_STATE
});
export { commonActions };