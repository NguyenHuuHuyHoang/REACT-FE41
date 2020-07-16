import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { layDanhSachKhoaHoc } from "../actions/khoaHocActions";
import KhoaHoc from "./KhoaHoc";

const PathDanhSachKhoaHoc =
  "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
class DanhSachKhoaHoc extends Component {
  componentDidMount() {
    // axios
    //   .get(PathDanhSachKhoaHoc)
    //   .then((result) => {
    //     // this.setState({
    //     //   dskh: result.data,
    //     // });
    //     this.props.layDanhSachKhoaHoc(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.props.layDanhSachKhoaHoc();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.dskh.map((kh) => (
              <div className="col-sm-3" key={kh.maKhoaHoc}>
                <KhoaHoc khoaHoc={kh} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dskh: state.khoaHocReducer.danhSachKhoaHoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    layDanhSachKhoaHoc: () => dispatch(layDanhSachKhoaHoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);
