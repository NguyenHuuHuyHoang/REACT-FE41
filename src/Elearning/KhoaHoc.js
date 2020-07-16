import React, { Component } from "react";

export default class KhoaHoc extends Component {
  render() {
    const { khoaHoc } = this.props;
    return (
      <div>
        <div className="card">
          <img src={khoaHoc.hinhAnh} alt="" className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
            <p className="card-text">{khoaHoc.moTa}</p>
          </div>
        </div>
      </div>
    );
  }
}
