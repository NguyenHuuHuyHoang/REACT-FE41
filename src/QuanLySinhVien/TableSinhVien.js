import React, { Component } from "react";
import { connect } from "react-redux";
import {suaSinhVienAction, xoaSinhVienAction, chonSinhVienAction}from '../actions/sinhVienAction'

class TableSinhVien extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th> Mã Sinh Viên</th>
            <th> Họ tên</th>
            <th> Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.danhSachSinhVien.map((sv) => (
            <tr key={sv.maSV}>
              <td>{sv.maSV}</td>
              <td>{sv.hoTen}</td>
              <td>{sv.soDT}</td>
              <td>{sv.email}</td>
              <td>
                <button
                  className="btn btn-success mr-2"
                  onClick={() => this.props.chonSinhVien(sv)}
                >
                  Sửa
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {this.props.xoaSinhVien(sv)}}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachSinhVien: state.sinhVienReducer.danhSachSinhVien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      chonSinhVien: (sinhVien) => dispatch(chonSinhVienAction(sinhVien)),
    suaSinhVien: (sinhVien) => dispatch(suaSinhVienAction(sinhVien)),
    xoaSinhVien: (sinhVien) => dispatch(xoaSinhVienAction(sinhVien)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TableSinhVien);
