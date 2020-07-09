import React, { Component } from "react";
import { connect } from "react-redux";
import {
  thayDoiSoLuongSanPhamAction,
  xoaSanPham,
} from "../actions/gioHangActions";
import { tinhTongTien } from "../selectors/gioHangSelectors";

class CartModalRedux extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.dsgh.map((sp) => (
                      <tr key={sp.maSP}>
                        <td>
                          <img
                            src={sp.hinhAnh}
                            alt={sp.hinhAnh}
                            width="50px"
                            height="50px"
                          />
                        </td>
                        <td>{sp.maSP}</td>
                        <td>{sp.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-danger mr-2"
                            onClick={() => {
                              this.props.thayDoiSoLuongSanPhamAction(sp, false);
                            }}
                          >
                            -
                          </button>
                          {sp.soLuong}
                          <button
                            className="btn btn-primary ml-2"
                            onClick={() => {
                              this.props.thayDoiSoLuongSanPhamAction(sp, true);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{sp.giaBan.toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              this.props.xoaSanPham(sp);
                            }}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {this.props.dsgh.length > 0 && (
                    <tfoot>
                      <tr>
                        <td colSpan="4"></td>
                        <td>
                          Tổng tiền: {this.props.tongTien.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsgh: state.gioHangReducer.danhSachGioHang, //Can lay gia tri gi tu store thi khai bao
    tongTien: tinhTongTien(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuongSanPhamAction: (sanPham, isAdd) => {
      dispatch(thayDoiSoLuongSanPhamAction(sanPham, isAdd));
    },
    xoaSanPham: (sanPham) => {
      dispatch(xoaSanPham(sanPham));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);
