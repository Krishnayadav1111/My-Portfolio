import * as coreAxios from "axios";
import projectConfig from "../projectConfig";
import { commonActions } from "store/common/commonActions";

export const axios = coreAxios.default.create({
  baseURL: projectConfig.commonBaseUrl,
});

export const axiosInterceptor = (dispatch) => {
  axios.interceptors.request.use(async (request) => {
    dispatch(commonActions.updateLoader(true));
    const authToken = localStorage.getItem("token");
    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`;
    }
    // Set default value for showToaster to true unless explicitly set to false
    request.showToaster = request.showToaster !== false;

    // KEEP THIS COMMENTED FOR NOW
    // if(request?.projects){
    //   request.baseURL = projectConfig.projectServiceUrl
    // }
    // if(request?.leads){
    //   request.baseURL = projectConfig.leads
    // }

    return request;
  });

  axios.interceptors.response.use(
    async (response) => {
      dispatch(commonActions.updateLoader(false));
      if (response?.data?.success) {
                // Check the 'showToaster' flag before displaying the toast
        if (response.config.showToaster) {
          dispatch(commonActions.setToast(response?.data?.success, response?.data?.message));
        }
        return response.data;
      }
      return response;
    },
    (error) => {
      dispatch(commonActions.updateLoader(false));
      const { response } = error;
      let toastMessage = "An error occurred"; // Default toast message

      if (response) {
        const { status, data } = response;
        if (status === 400) {
          toastMessage = data.message; // Use the error message from the response
        } else if (status === 401) {
          toastMessage = "You are not authorized"; // Unauthorized error message
          // localStorage.removeItem("token")
        }
        if(response.config.showToaster){
          dispatch(commonActions.setToast(data?.success, data.message));
        }
      }
      return Promise.reject(error);
    }
  );
};
