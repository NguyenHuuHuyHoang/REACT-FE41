import React, { Component } from 'react'

export default class BT2ProductItem extends Component {
    render() {
        let { dataItem } = this.props;
        return (
          <div>
            <div className="card">
              <img className="card-img-top" src={dataItem.image} alt />
              <div className="card-body">
                <h4 className="card-title">{dataItem.name}</h4>
                <p className="card-text">{dataItem.shortDescription}</p>
                <button className="btn btn-primary">Mua ngay</button>
              </div>
            </div>
          </div>
        );
      }
}
