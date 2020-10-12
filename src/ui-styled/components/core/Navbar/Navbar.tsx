import React from 'react'
import { useToggle } from '../../../hooks/index'
import { Nav } from 'ui-styled/components/Nav/Nav'
import { Route } from '../../../types'
import { Close, Burger as MenuIcon} from '../../../utils'
import { menuCss, mediaFrom } from './styles'
import styled from 'styled-components/macro'
import { styledWrap } from '../../../resources'

interface Props {
   [prop: string]: any;
   routes: Route[];
   burger?: any;
}

const menuIcon = ({onClick}: any) =>
   <MenuIcon className='material-icons' onClick={onClick}>
      menu
   </MenuIcon>

function Navbar({ routes, burger = menuIcon }: Props) {
   const {
      state: showMenu,
      toggle: toggleMenu } = useToggle()
   const Burger = styledWrap(burger)

   return (
      <Wrap>
         <Burger onClick={toggleMenu} show={!showMenu} css={mediaFrom}/>
         <Nav routes={routes} css={showMenu ? menuCss : 'display: none;'}>
            {showMenu && <Close onClick={toggleMenu} children='x'/>}
         </Nav>
      </Wrap>
   )
}

const Wrap = styled('div')``

export default Navbar
export { Navbar }