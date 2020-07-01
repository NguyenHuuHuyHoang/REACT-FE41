import React, { Component } from 'react'

export default class BT3PhoneItem extends Component {
    render() {
        let {dataPhone} = this.props
        return dataPhone.map((phone, index) =>{
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


}
