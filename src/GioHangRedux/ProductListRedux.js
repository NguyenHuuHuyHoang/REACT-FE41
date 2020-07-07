import React, { Component } from "react";
import ProductItemRedux from "./ProductItemRedux";
import {connect} from 'react-redux'

class ProductListRedux extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dssp.map((sp, index) => {
          return (
            <div className="col-sm-4" key={index}>
              <ProductItemRedux sanPham={sp} />;
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dssp: state.gioHangReducer.danhSachSanPham,
  };
};

export default connect(mapStateToProps)(ProductListRedux);
