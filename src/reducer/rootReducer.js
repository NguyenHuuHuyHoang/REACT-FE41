import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import gioHangReducer from "./gioHangReducer";

//Tập hợp tất cả reducer
export default combineReducers({
  //todosReducer
  todosReducer, //Key là tên mà sau này sẽ gọi tới store để lấy value về
  gioHangReducer,
});
