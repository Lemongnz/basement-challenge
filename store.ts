import {createStore} from "redux";

import {productReducer} from "./reducers/product";

export const store = createStore(productReducer, []);
