import {createStore, Store} from "redux";

import {productReducer} from "./reducers/product";

export const store: Store = createStore<any, any, any, any>(productReducer, []);
