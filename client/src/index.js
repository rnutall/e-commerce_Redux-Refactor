import store from './utils/store';
// import {render} from 'react-dom';
// import { Provider } from 'react-redux'
// import { applyMiddleware, createStore, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from './reducers'
// import loggerMiddleware from '..middleware/logger'
// import monitorReducerEnhancer from  './enhancer/monitorReducer'
// import './index.css';
// import App from './App';

//import * as serviceWorker from './serviceWorker';
//* LOG THE INITIAL STATE
console.log('Initial state:',store.getState() )
// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
// const store = configureStore()
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)
store.dispatch({ type: 'utils/GlobalState', payload: 'useProductReducer' })

store.dispatch({
type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})
unsubscribe()

store.dispatch({ type: 'utils/GlobalState' , payload:'useProductReducer'})
// const renderApp = () =>
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./components/App', renderApp)
// }

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// renderApp();
