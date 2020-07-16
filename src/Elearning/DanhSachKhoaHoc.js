import React, { Component } from "react";
import axios from "axios";

const PathDanhSachKhoaHoc =
  "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
export default class DanhSachKhoaHoc extends Component {
  componentDidMount() {
    axios
      .get(PathDanhSachKhoaHoc)
      .then((result) => {
        this.setState({
          dskh: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return <div></div>;
  }
}
