import React, { Component } from 'react'

export default class BT3PhoneList extends Component {
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ]
      state = {
          phoneDetail:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
      }

      
      
    renderPhone = () => {
        return this.dataPhone.map((phone, index) =>{
            return <div className="col-4" key={index}>
            <div class="card">
                <img class="card-img-top m-auto" style={{width:'80%'}} src={phone.hinhAnh} alt=""/>
                <div class="card-body">
                    <h4 class="card-title">{phone.tenSP}</h4>
                   <button className="btn btn-dark text-light">Xem chi tiết</button>
                </div>
             </div>
         </div>
        })
    }

    render() {
        return (
               <div className="container">
                   <h3>Danh sách điện thoại</h3>
                   <div className="row">
                       {this.renderPhone()}
                     </div>
                     <hr/>
                     <h3>Chi tiết sản phẩm</h3>
                     <div className="row">
                         <div className="col-4">
                                <p>{this.state.phoneDetail.tenSP}</p>
                                <img src={this.state.phoneDetail.hinhAnh} alt="" className="card-img-top"/>
                         </div>
                         <div className="col-8">
                                <table className="table" >
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{this.state.phoneDetail.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{this.state.phoneDetail.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{this.state.phoneDetail.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{this.state.phoneDetail.cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <th>{this.state.phoneDetail.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <th>{this.state.phoneDetail.rom}</th>
                                    </tr>
                                </table>
                         </div>
                     </div>
                     
               </div>
        )
    }
}
