import React, { Component } from 'react'

export default class State extends Component {
    
//Nếu như isLogin thì người dùng đã đăng nhập => hiển thị thông tin xin chào userName
//Ngược lại isLogin = false người dùng chưa đăng nhập hiển thị nút đăng nhập
         userName = 'khai';
         //state là một thuộc tính của component => khi state thay đổi giá trị giao diện render lại
         state = {
            isLogin : false
         }

        renderLogin = () => {
            if (this.isLogin) {
                return <button className="nav-link">Hello {this.userName}</button>
            }
            return <button className="nav-link" 
            onClick={()=>{this.login();}}
            >Đăng nhập</button>
        }

        login = () => {
            // this.state.isLogin = true;
            // console.log(this.isLogin);
            this.setState({
                isLogin: true
            }, () => {
                //Call back thực hiện sau khi state mang giá trị mới
                console.log(this.state.isLogin);
            })
            console.log(this.state.isLogin);
        }

        render() {

        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                {/* {this.renderLogin()} */}
                                {this.isLogin ? <button className="nav-link">Hello {this.userName}</button>:
                                <button className="nav-link">Đăng nhập</button>}
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
