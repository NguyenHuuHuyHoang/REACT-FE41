import {
  THEM_SINH_VIEN,
  SUA_SINH_VIEN,
  XOA_SINH_VIEN,
  CHON_SINH_VIEN,
} from "../constants/sinhVienConstants";

const dssv = localStorage.getItem("dssv");

const initialState = {
  danhSachSinhVien: dssv ? JSON.parse(dssv) : [],
  sinhVienDangChon: {},
};

const sinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN:
      const danhSachSinhVienNew = [...state.danhSachSinhVien, action.sinhVien];
      localStorage.setItem("dssv", JSON.stringify(danhSachSinhVienNew));
      return {
        ...state,
        danhSachSinhVien: [...state.danhSachSinhVien, action.sinhVien],
      };
    case SUA_SINH_VIEN: {
      const danhSachSinhVienNew = state.danhSachSinhVien.map((sv) => {
        if (sv.maSV === action.sinhVien.maSV) {
          return action.sinhVien;
        }
        return sv;
      });
      localStorage.setItem("dssv", JSON.stringify(danhSachSinhVienNew));
      return { ...state, danhSachSinhVien: danhSachSinhVienNew };
    }
    case XOA_SINH_VIEN: {
      const danhSachSinhVienNew = state.danhSachSinhVien.filter((sv) => {
        if (sv.maSV === action.sinhVien.maSV) {
          return false;
        }
        return true;
      });
      localStorage.setItem("dssv", JSON.stringify(danhSachSinhVienNew));
      return { ...state, danhSachSinhVien: danhSachSinhVienNew };
    }
    case CHON_SINH_VIEN: {
      return { ...state, sinhVienDangChon: action.sinhVien };
    }
    default:
      return state;
  }
};

export default sinhVienReducer;
