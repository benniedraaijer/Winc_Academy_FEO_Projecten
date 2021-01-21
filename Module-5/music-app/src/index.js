import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import { Provider } from "react-redux";

// import projectReducer from "./redux/reducers/projectReducer";
//import config from "./config/FireBaseConfig";

// const reducers = combineReducers({
//   data: projectReducer,
// });

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reactReduxFirebase(config), // redux binding for firebase
//     reduxFirestore(config) // redux bindings for firestore
//   )
// );

ReactDOM.render(
  //<Provider store={store}>
  <App />,
  //</Provider>,
  document.getElementById('root')
);
