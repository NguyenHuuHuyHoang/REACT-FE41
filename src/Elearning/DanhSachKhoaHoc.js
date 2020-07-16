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
    const { dskh, loading, error } = this.props;
    if (loading) {
      //return <Loading />
      return <p>Loading....</p>;
    }

    if (error) {
      //return <Error />
      return (
        <div className="alert alert-danger">
          <p>Something went wrong</p>
        </div>
      );
    }
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
    loading: state.khoaHocReducer.loading,
    error: state.khoaHocReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    layDanhSachKhoaHoc: () => dispatch(layDanhSachKhoaHoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);
