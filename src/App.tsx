/// <reference path="./types/index.d.ts"/>

import React from 'react'
import styled from 'styled-components'
import {StoreContext, store} from 'store'
import Header from 'components/Header'

import './styles/index.sass'

export default function () {
	return (
		<StoreContext.Provider value={store}>
		   <App id='App'>
            <Header/>
   		</App>
		</StoreContext.Provider>
	)
}
const App = styled('div')`
   background-color: #303030;
   color: white;
`