import React, { Component } from 'react'

export default class ExState1 extends Component {

    state = {
        likes : 0 //Giá tị thay đổi trên giao diện mỗi lần người dùng thao tác được lưu trong state
    }

    addHeart = () => {
        let likeNumbers = this.state.likes + 1;
        //Dùng phương thức setstate gán lại giá trị mới cho state => giao diện tự động render lại
        this.setState({
            likes: likeNumbers
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card bg-dark text-light" style={{width:250}}>
                            <img className="card-img-top w-100" src="https://loremflickr.com/320/240" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Lê Thị A ({this.state.likes} <i className="fa fa-heart"></i>)</h5>
                                <p className="card-text">Tuỏi 18</p>
                               
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div class="card" style={{width:250}}>
                            <div class="card-body">
                                <h6 class="card-title">Lượt thích ({this.state.likes} <i className="fa fa-heart"></i>)</h6>
                                <button className="btn btn-danger" onClick={()=>{
                                    this.addHeart();
                                }}
                                >Thả tim <i className="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
