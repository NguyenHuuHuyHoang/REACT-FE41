import { LAY_DANH_SACH_KHOA_HOC } from "../constants/ElearningConstants";
import * as actionTypes from "../constants/ElearningConstants";

const initialState = {
  danhSachKhoaHoc: [],
  loading: false,
  error: false,
};

const khoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_KHOA_HOC: {
      return { ...state, danhSachKhoaHoc: action.dskh };
    }
    case actionTypes.GET_COURSES_LIST_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case actionTypes.GET_COURSES_LIST_SUCCESS: {
      return {
        ...state,
        danhSachKhoaHoc: action.dskh,
        loading: false,
        error: false,
      };
    }
    case actionTypes.GET_COURSES_LIST_FAILED: {
      return { ...state, loading: false, error: true };
    }
    default:
      return state;
  }
};

export default khoaHocReducer;
