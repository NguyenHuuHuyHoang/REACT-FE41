import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    renderPhoneList = () => {
        let {dataPhone, themGioHang} = this.props;
        return dataPhone.map((phone, index) => {
            return <div key={index} className="col-4">
                <BTProductItem phone={phone} themGioHang={themGioHang}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderPhoneList()}
                    </div>
                </div>
            </div>
        )
    }
}
