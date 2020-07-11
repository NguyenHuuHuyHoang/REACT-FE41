import React, { Component } from "react";

export default class FormThemSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      soDT: "",
      hoTen: "",
      email: "",
    },
    errors: { maSV: "", soDT: "", hoTen: "", email: "" },
  };

  handelChange = (evt) => {
    const { name, value } = evt.target;
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
    //Cách 2
    // const values = {...this.state.values}
    // this.setState({
    //     values: {
    //         ...values,
    //         [name]: value
    //     }
    // })
  };

  handleSubmit = () => {
    let hasError = false;
    for (let key in this.state.values) {
      const error = this.validation(key, this.state.values[key]);

      if (error) {
        this.setState((state) => {
          return {
            errors: {
              ...state.errors,
              [key]: error,
            },
          };
        });
        hasError = true;
      }
    }
    if (hasError) return;

    console.log(this.state.values);
  };

  handleBlur = (evt) => {
    const { name, value } = evt.target;
    console.log(name);
    const error = this.validation(name, value);
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: error,
      },
    });
  };

  validation = (name, value) => {
    if (name === "maSV") {
      return value ? "" : "Mã sinh viên không được để trống";
    }
    if (name === "hoTen") {
      return value ? "" : "Họ tên không được để trống";
    }
    if (name === "soDT") {
      return value ? "" : "Số điện thoại không được để trống";
    }
    if (name === "email") {
      return value ? "" : "Email không được để trống";
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label> Mã SV </label>
              <input
                type="text"
                className="form-control"
                value={this.state.values.maSV}
                name="maSV"
                // onChange={evt => this.setState({maSV: evt.target.value})}
                onChange={this.handelChange}
                onBlur={this.handleBlur}
                // onChange={evt => this.handelChange(evt)}
              />
              {this.state.errors.maSV && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errors.maSV}
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label> Số diện thoại </label>
              <input
                type="text"
                className="form-control"
                value={this.state.values.soDT}
                name="soDT"
                onChange={this.handelChange}
                onBlur={this.handleBlur}
                // onChange={(evt) => this.setState({ soDT: evt.target.value })}
              />
              {this.state.errors.soDT && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errors.soDT}
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label> Họ tên </label>
              <input
                type="text"
                className="form-control"
                value={this.state.values.hoTen}
                name="hoTen"
                onChange={this.handelChange}
                onBlur={this.handleBlur}
                // onChange={(evt) => this.setState({ hoTen: evt.target.value })}
              />
              {this.state.errors.hoTen && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errors.hoTen}
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label> Email </label>
              <input
                type="text"
                className="form-control"
                value={this.state.values.email}
                name="email"
                onChange={this.handelChange}
                onBlur={this.handleBlur}
                // onChange={(evt) => this.setState({ email: evt.target.value })}
              />
              {this.state.errors.email && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errors.email}
                </div>
              )}
            </div>
          </div>

          <button
            className="btn btn-primary m-auto "
            onClick={this.handleSubmit}
          >
            Thêm
          </button>
        </div>
      </div>
    );
  }
}