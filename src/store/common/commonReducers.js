import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { commonConstants } from "./commonConstants";


const initialState = {
  toast: {
    timeout: 3000,
    open: false,
    message: "",
    success: null,
  },
  loading:false,
  initialCalled: {
    globalLoader: 0,
  },
  roles:{},
  error: null,
  commonUserList:{},
};

export const commonReducers = persistReducer(
  {
    storage,
    key: "common",
    whitelist: ["roles"],
  },
  (state = initialState, { type, payload }) => {
    switch (type) {
      case commonConstants.GLOBAL_SET_TOAST_DATA: {
          return {
            ...state,
            toast: {
              open: true,
              message: payload?.message,
              timeout: 3000,
              success: payload?.success,
            },
          };
      }

      case commonConstants.GLOBAL_RESET_TOAST_DATA: {
        return {
          ...state,
          toast: initialState.toast,
        };
      }

      case commonConstants.GLOBAL_LOADER_DATA: {
        return {
          ...state,
          loading: payload
        };
      }
      case commonConstants.FETCH_ALL_COMMON_ROLES_SAGA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case commonConstants.FETCH_ALL_COMMON_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        roles: payload,
      };
    case commonConstants.FETCH_ALL_COMMON_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case commonConstants.FETCH_COMMON_USER_LIST_SAGA:
      return{
        ...state,
        loading : true,
        // commonUserList : payload,
      }
    case commonConstants.FETCH_COMMON_USER_LIST_SUCCESS:
      return{
        ...state,
        loading : false,
        commonUserList : { ...state.commonUserList,...payload },
      }
    case commonConstants.FETCH_COMMON_USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error : payload ,
      }

    case commonConstants.RESET_STATE:
      return {
        state : initialState,
      }
      default:
        return state;
    }
  }
);
