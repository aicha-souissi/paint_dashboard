import { combineReducers } from "redux";
import colorReducer from "./color.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  colors:colorReducer,
  products:productReducer
});

export default rootReducer ; 