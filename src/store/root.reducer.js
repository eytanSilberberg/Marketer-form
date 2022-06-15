// import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { formReducer } from './form/form.reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const rootReducer = combineReducers({
  formModule: formReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.myStore = store