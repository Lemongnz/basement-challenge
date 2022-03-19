import {createStore} from "redux";

import {productReducer} from "./pages/reducers/product";

export const store = createStore<any, any, any, any>(productReducer, []);
