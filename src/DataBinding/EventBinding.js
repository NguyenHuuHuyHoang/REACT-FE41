import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = (name) => {
        alert('hello' + name)
    }

    render() {
        return (
            <div>
                event binding
                <br/>
                <button onClick={()=>{
                    alert('hello')
                }} id="btnShowMessage" className="btn btn-success">Cách 1</button> 
                <button onClick={()=>{
                    this.handleClick('khai');
                }} id="btnShowMessage" className="btn btn-success">Cách 1- có truyền tham số</button> 
                {/* Cách 1 là định nghĩa trực tiếp, Cách 2 truyền callback function */}
                <button onClick={this.handleClick.bind(this,'khải')} 
                // .bind(this, params) truyền tham số vào callback function
                 id="btnShowMessage" className="btn btn-success">Cách 2</button>
                 
            </div>
        )
    }
}
