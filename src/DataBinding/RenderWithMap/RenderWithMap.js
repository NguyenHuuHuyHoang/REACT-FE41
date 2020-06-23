import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'Sony Xperia', price: 1000 },
        { id: 2, name: 'Iphone', price: 2000 },
        { id: 3, name: 'Samsung galaxy note 10', price: 3000 },
    ];

    renderProduct = () => {
        //Cách 1 dùng vòng lặp for
        // let contentJSX = [];
        // for (let product of products) {
        //     let tagTrJSX = 
        //     <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //     </tr>
        //     //push tagTrJSX vào contentJSX
        //     contentJSX.push(tagTrJSX);
        // }

        //Cách 2 dùng map
        let contentJSX = this.products.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
        return contentJSX;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3>Danh sách sản phẩm</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProduct()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
