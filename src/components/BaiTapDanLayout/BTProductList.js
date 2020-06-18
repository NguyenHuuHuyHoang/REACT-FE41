import React, { Component } from 'react'
import BTPhone from './BTPhone'
import BTLaptop from './BTLaptop'
import BTPhoneItem from './BTPhoneItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center display-4">Danh sach san pham</h3>
                <div className="row">
                    <div className="col-3">
                        <BTPhoneItem />
                    </div>
                    <div className="col-3">
                        <BTPhoneItem />
                    </div>
                    <div className="col-3">
                        <BTPhoneItem />
                    </div>
                    <div className="col-3">
                        <BTPhoneItem />
                    </div>
                </div>
            </div>
        )
    }
}
