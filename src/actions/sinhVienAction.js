import {
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
  CHON_SINH_VIEN,
} from "../constants/sinhVienConstants";

export const themSinhVienAction = (sinhVien) => {
  return {
    type: THEM_SINH_VIEN,
    sinhVien,
  };
};

export const suaSinhVienAction = (sinhVien) => {
  return {
    type: SUA_SINH_VIEN,
    sinhVien,
  };
};

export const xoaSinhVienAction = (sinhVien) => {
  return {
    type: XOA_SINH_VIEN,
    sinhVien,
  };
};

export const chonSinhVienAction = (sinhVien) => {
  return {
    type: CHON_SINH_VIEN,
    sinhVien,
  };
};
