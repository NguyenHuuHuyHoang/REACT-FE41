import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
      //This.props is property of class component, receive value from father component transfer, can not set another value.
    let {productData} = this.props; //ES6 {productData} = obj , this.props = obj => productData pointer to this.props [Destructuring]

    return (
      <div>
        <div className="card text-white bg-secondary m-auto" style={{width:320}}>
          <img className="card-img-top" src="https://loremflickr.com/320/240"  alt />
          <div className="card-body">
            <h4 className="card-title">{productData.name}</h4>
            <p className="card-text">{productData.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
