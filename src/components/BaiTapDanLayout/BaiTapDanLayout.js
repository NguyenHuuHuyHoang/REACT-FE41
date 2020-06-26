import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import BTFooter from "./BTFooter";
import BTProductList from "./BTProductList";

export default class BaiTapDanLayout extends Component {

    dataProduct = [
        {
          maSP: 1,
          tenSP: "Black Berry",
          hinhAnh: "./img/sp_blackberry.png",
          gia: 1000,
        },
        { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
        { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
        { maSP: 4, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
      ]

  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTProductList dataProduct={this.dataProduct}/>
        <BTFooter />
      </div>
    );
  }
}
