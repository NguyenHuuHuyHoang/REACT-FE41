import React, { Component } from 'react'
import BTPhone from './BTPhone'
import BTLaptop from './BTLaptop'
import BTPhoneItem from './BTPhoneItem'

export default class BTProductList extends Component {
     
     renderProduct = (dataProduct) => {
        let contentJSX = dataProduct.map((product, index) => {
            return <div className="col-3" key={index}>
                <BTPhoneItem dataItem={product} />
            </div>
        })
        return contentJSX;
    };
    render() {
        let {dataProduct} = this.props;
        return (
            <div className="container-fluid">
                <h3 className="text-center display-4">Danh sach san pham</h3>
                <div className="row">
                {this.renderProduct(dataProduct)}
                </div>
            </div>
        )
    }
}
