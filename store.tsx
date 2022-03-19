import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";

import { productReducer } from "./pages/reducers/product";

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: "Your Instance Name",
  hostname: "localhost",
  port: 8000, // the port your remotedev server is running at
});

export const store: Store = createStore<any, any, any, any>(productReducer, []);

// export const store: Store = createStore<any, any, any, any>(
//   productReducer,
//   composeEnhancers(applyMiddleware(/* put your middlewares here */))
// );
