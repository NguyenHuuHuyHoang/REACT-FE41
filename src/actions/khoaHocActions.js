import { LAY_DANH_SACH_KHOA_HOC } from "../constants/ElearningConstants";
import * as actionTypes from "../constants/ElearningConstants";
import axios from "axios";

export const layDanhSachKhoaHocAction = (dskh) => {
  return {
    type: LAY_DANH_SACH_KHOA_HOC,
    dskh,
  };
};

export const layDanhSachKhoaHoc = () => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    // Gọi API
    dispatch({
      type: actionTypes.GET_COURSES_LIST_REQUEST,
    });
    axios
      .get(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      )
      .then((res) => {
        dispatch({
          type: actionTypes.GET_COURSES_LIST_SUCCESS,
          dskh: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_COURSES_LIST_FAILED,
        });
      });
    // khi có kết quả API thì dispatch action mới
  };
};
