import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {

    let {phone} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="iphone" />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan.toLocaleString()}</p>
          <button className="btn btn-success" onClick={()=>{
              this.props.themGioHang(phone)
          }}>Thêm sản phẩm</button>
        </div>
      </div>
    );
  }
}
