import React, { Component } from "react";

export default class BT3PhoneDetail extends Component {
  render() {
    let { phoneDetail } = this.props;

    return (
      <div className="row">
        <div className="col-4">
          <p>{phoneDetail.tenSP}</p>
          <img src={phoneDetail.hinhAnh} alt="" className="card-img-top" />
        </div>
        <div className="col-8">
          <table className="table">
            <tbody>
              <tr>
                <th>Màn hình</th>
                <th>{phoneDetail.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{phoneDetail.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{phoneDetail.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{phoneDetail.cameraSau}</th>
              </tr>
              <tr>
                <th>RAM</th>
                <th>{phoneDetail.ram}</th>
              </tr>
              <tr>
                <th>ROM</th>
                <th>{phoneDetail.rom}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
