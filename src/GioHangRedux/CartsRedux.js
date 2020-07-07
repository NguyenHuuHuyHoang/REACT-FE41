import React, { Component } from "react";
import ProductListRedux from "./ProductListRedux";
import CartModalRedux from "./CartModalRedux";

export default class CartsRedux extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bài tập giỏ hàng redux</h1>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-default btn-lg mb-5"
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            (0) Giỏ hàng
          </button>
        </div>

        <ProductListRedux />
        <CartModalRedux />
      </div>
    );
  }
}
