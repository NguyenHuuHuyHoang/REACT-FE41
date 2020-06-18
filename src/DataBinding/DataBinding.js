import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocVien = {
        ma:1,
        hoTen: 'Nguyen Van a',
        hinhAnh: 'https://picsum.photos/200/300'

    }

    //Phuong thuc render do minh tao ra
    renderImg(){
        return <img src="https://picsum.photos/200/300" alt="123"/>
    }

    render() {
        let title = 'hello fe 41';
        return (
            <div>
                <div className="container">
                    <div className="card text-left">
                        <img width={200} height={300} className ="card-img-top w-25" src={this.hocVien.hinhAnh} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{this.hocVien.hoTen} </h4>
                        </div>
                    </div>
                </div>
                {/* Binding bien */}
                <h1>{title}</h1>
                <input value={title} />
                {/* Binding phuong thuc */}
                {this.renderImg()}
            </div>
        )
    }
}
