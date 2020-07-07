import React, { Component } from "react";
import {themSanPhamAction} from "../actions/gioHangActions";
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt={sanPham.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
            <button className="btn btn-success" onClick={()=>{this.props.themSanPham(sanPham)}}>
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSanPham: (sanPham) => dispatch(themSanPhamAction(sanPham)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);
