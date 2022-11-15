import { combineReducers } from "redux";
import posts from "./posts";
import authReducer from "./auth"
// const posts =[{"samir":"sami"}]
export default  combineReducers({posts,authReducer})