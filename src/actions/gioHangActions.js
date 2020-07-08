export const themSanPhamAction = (sanPham) => {
  return {
    type: "THEM_SAN_PHAM",
    sanPham,
  };
};

export const thayDoiSoLuongSanPhamAction = (sanPham, isAdd) => {
  return { type: "THAY_DOI_SO_LUONG", sanPham, isAdd };
};

export const xoaSanPham = (sanPham) => {
  return {
    type: "XOA_SAN_PHAM",
    sanPham,
  };
};
