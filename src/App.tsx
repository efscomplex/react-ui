import React from 'react'
import styled, {css } from 'styled-components/macro'
import Header from './styled-ui/components/Header/Header'

import { Nav, Card} from './styled-ui/components'
import { Close, Burger} from './styled-ui/utils'
import Main from 'containers/Main'
import * as config from './config'

import './styles/index.sass'

function App(props: any) {
	const [showMenu, setshowMenu] = React.useState(false)
	const menuPropStyles = showMenu && {
		column: 'true',
		align: 'center',
	}
   const toggleMenu = () => { setshowMenu(state => !state) }
   const cssMenuShow = css`
      @media(min-width: 500px){
         ${Burger}{ display: none;}
      }
      @media(max-width: 500px){
         ${Nav}{ 
            ${!showMenu && 'display: none;'}
         }
      }
   `

	return (
		<div id='App' {...props} css={cssMenuShow}>
			<Header pd='0'>
				<Burger className='material-icons' onClick={toggleMenu}>
               menu
				</Burger>
				<Nav routes={config.routes} {...menuPropStyles} css={showMenu ? menuCss : null}>
               {showMenu && <Close onClick={toggleMenu} children='x'/>}
            </Nav>
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
const menuCss = css `
   background-color: white;
   color: gray;
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
`