import React, { Component } from 'react'

export default class ExState2 extends Component {

    state = {
        imageUrl: "./img/CarBasic/products/red-car.jpg"
    }

    changeColor = (color) => {
        // let colorChange = '';
        // switch (color) {
        //     case 'red':
        //         colorChange = "img/CarBasic/products/red-car.jpg";
        //         break;
        //     case 'silver':
        //         colorChange = "img/CarBasic/products/silver-car.jpg";
        //         break;
        //     default:
        //         colorChange = "img/CarBasic/products/black-car.jpg";
        // };
        let newUrlImg = `./img/CarBasic/products/${color}-car.jpg`;
        let {imageUrl}=this.state;
        this.setState({
           imageUrl: newUrlImg
        }, () => {
            console.log(newUrlImg, this.state.imageUrl);
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Please choose your car color</h3>
                            <img src={this.state.imageUrl} style={{ width: '100%' }} alt="" srcset="" />
                        </div>
                        <div className="col-6 d-flex">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={this.changeColor.bind(this,'red')}
                                >Red</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-grey" onClick={this.changeColor.bind(this,'silver')}
                                >Silver</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={this.changeColor.bind(this,'black')}
                                >Dark</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
