import React, { Component } from "react";
import FormThemSinhVien from "./FormThemSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapForm extends Component {
  render() {
    return (
      <div>
        <FormThemSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
