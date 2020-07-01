import React, { Component } from "react";

export default class BTCartModal extends Component {

  renderGioHang = () => {
    //Lay state dataGioHang tu component BTCarts.js binding ra giao dien
    let {gioHang} = this.props;
    return gioHang.map((spGH, index) => {
      return  <tr key={index}>
      <td>{spGH.maSP}</td>
      <td>
        <img
          style={{width:'50px'}}
          src={spGH.hinhAnh}
          alt={spGH.hinhAnh}
        />
      </td>
      <td>{spGH.tenSP}</td>
      <td>
        <button className="btn btn-success" onClick={()=>{this.props.ChangeQuantityItem(spGH)}}>+</button>
        {spGH.soLuong}
        <button className="btn btn-success"onClick={()=>{this.props.ChangeQuantityItem(spGH,false)}}>-</button>
      </td>
      <td>{spGH.donGia.toLocaleString()}</td>
      <td>{(spGH.donGia * spGH.soLuong).toLocaleString()}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>{this.props.DeleteItemCart(spGH)}}>Xóa</button>
      </td>
    </tr>
    })
  }

 tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.donGia);
    },0);
  };


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
          <div
            className="modal-dialog modal-xl .modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Giỏ hàng</h5>
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
                      <th>Mã Sp</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                   {this.renderGioHang()}
                  </tbody>
                  <tfoot>
                    <tr>
                        <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
