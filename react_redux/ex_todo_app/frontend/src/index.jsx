import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

//o middle promise vai esperar que uma promise(request-'todoAction') seja resolvida para chamar o reducer
import promise from 'redux-promise'
//o middle multi permite retornar um array com varias actions
import multi from 'redux-multi'
//o thunk, em vez de retornar uma ActionCreator, ele retorna um método com o parametro dispatch
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools  = window.__REDUX_DEVTOOLS_EXTENSION__
	&& window.__REDUX_DEVTOOLS_EXTENSION__()

//lista de middle no ciclo de vida 
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	
	,document.getElementById('app'))