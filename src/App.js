import React from 'react'
import styled from 'styled-components/macro'
import Header from './styled-ui/components/Header/Header'

import { Navbar, Card} from './styled-ui/components'
import Main from 'containers/Main'
import * as config from './config'

import './styles/index.sass'

function App(props) {
	return (
		<div id='App' {...props}>
         <Header pd='0'>
            <Navbar routes={config.routes}/>
			</Header>
			<Main/>
		</div>
	)
}
export default styled(App)`
   padding: 2rem;
	height: 100vh;
	color: white;
	background: var(--bg);
	${Header} {
		font-weight: bold;
      margin-bottom: 2rem;
	}
   main{
      ${Card}{
         align-items: center;
         ${Card.Body}{
            justify-self: center;
         }
      }
   }
`