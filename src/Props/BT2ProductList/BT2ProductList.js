import React, { Component } from 'react'
import BT2ProductItem from './BT2ProductItem'


export default class BT2ProductList extends Component {

    renderItem = (dataJSON) => {
        let contentJSX = dataJSON.map((product, index) => {
            return <div className="col-4" key={index}>
                <BT2ProductItem dataItem={product} />
            </div>
        })
        return contentJSX;
    }

    render() {
        let {dataJSON} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderItem(dataJSON)}
                    </div>
                </div>
            </div>
        )
    }
}
