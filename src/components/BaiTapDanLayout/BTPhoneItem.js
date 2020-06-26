import React, { Component } from 'react'

export default class BTPhoneItem extends Component {


    render() {
        let {dataItem} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={dataItem.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{dataItem.tenSP}</h4>
                            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                            <a href="#" className="btn btn-primary">{dataItem.gia}</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
