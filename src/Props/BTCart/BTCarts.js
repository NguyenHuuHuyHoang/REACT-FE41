import React, { Component } from "react";
import BTCartModal from "./BTCartModal";
import BTProductList from "./BTProductList";

export default class BTCarts extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  //Luu tru gio hang tai component chua ca giao dien va nut them san pham
  state = {
    gioHang: [],
  };

  //Chuc nang them san pham vao gio hang
  themGioHang = (spClick) => {
    console.log("Sản phẩm được click", spClick);
    //Tao ra 1 sp gio hang
    let spGH = {
      maSP: spClick.maSP,
      hinhAnh: spClick.hinhAnh,
      tenSP: spClick.tenSP,
      soLuong: 1,
      donGia: spClick.giaBan,
    };

    let gioHangCapNhat = [...this.state.gioHang];
    //setState gio hang

    //Tim san pham duoc click co trong gio hang hay chua
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === spClick.maSP
    ); //spGioHang la cac object dang co trong state gioHang
    if (index !== -1) {
      //Neu tim duoc san pham co trong gio hang thi tai vi tri sp do tang so luong
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Neu khong tim thay san pham duoc click co trong gio hang thi them sp do vao gio hang
      gioHangCapNhat.push(spGH);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tinhTongSoLuongGioHang = () =>
    this.state.gioHang.reduce(
      (tongSoLuong, spGH, index) => (tongSoLuong += spGH.soLuong),
      0
    );

  DeleteItemCart = (spXoa) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === spXoa.maSP
    );
    gioHangCapNhat.splice(index);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  ChangeQuantityItem = (spChange, isAdd = true) => {
    //If no input secondary params => add else => subtract
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === spChange.maSP
    );
    if (isAdd) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong < 1) {
        return;
      }
      gioHangCapNhat[index].soLuong -= 1;
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    return (
      <div className="container p-5">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-default btn-lg mb-5"
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>(
            {this.tinhTongSoLuongGioHang()}) Giỏ hàng
          </button>
        </div>
        <BTCartModal
          gioHang={this.state.gioHang}
          DeleteItemCart={this.DeleteItemCart}
          ChangeQuantityItem={this.ChangeQuantityItem}
        />
        <BTProductList
          dataPhone={this.dataPhone}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}
