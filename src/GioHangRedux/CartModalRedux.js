import React, { Component } from "react";
import { connect } from "react-redux";

class CartModalRedux extends Component {
  render() {
    const tongTien = this.props.dsgh.reduce((total, sp) => {
      total += sp.giaBan * sp.soLuong;
      return total;
    }, 0);
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
          <div className="modal-dialog" role="document">
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
                <table class="table">
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
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
                        <td>{sp.soLuong}</td>
                        <td>{sp.giaBan.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  {this.props.dsgh.length && (
                      <tfoot>
                      <tr>
                          <td colSpan="4"></td>
                          <td>Tổng tiền: {tongTien.toLocaleString()}</td>
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
  };
};

export default connect(mapStateToProps, null)(CartModalRedux);
