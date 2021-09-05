import { combineReducers } from "redux";
import colorReducer from "./color.reducer";
import devisReducer from "./devis.reducer";
import MagasinReducer from "./magasin.reducer";
import productReducer from "./product.reducer";
import tendanceReducer from "./tendance.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  colors:colorReducer,
  products:productReducer, 
  magasin:MagasinReducer, 
  tendance:tendanceReducer, 
  devis:devisReducer
});

export default rootReducer ; 