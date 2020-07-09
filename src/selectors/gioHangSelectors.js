export const tinhTongTien = state => {
    return state.gioHangReducer.danhSachGioHang.reduce((total, sp) => {
      total += sp.giaBan * sp.soLuong;
      return total;
    }, 0);
}