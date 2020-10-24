import React from 'react'
import styled, { css } from 'styled-components/macro'

import { useToggle } from 'ui-styled/hooks/index'
import { Nav } from 'ui-styled/components'
import { Route } from 'ui-styled/types'
import { Close, Burger } from 'ui-styled/components/helpers'

import { menuCss, mediaFrom } from './styles'

interface Props {
   [prop: string]: any;
   routes: Route[];
}

function Navbar({ routes }: Props) {
   const {
      state: showMenu,
      toggle: toggleMenu } = useToggle()
   
   const cssNav = showMenu
      ? menuCss
      : css `display: none;`

   return (
      <Wrap>
         <Burger onClick={toggleMenu} show={!showMenu} css={mediaFrom}/>
         <Nav routes={routes} stcyle={cssNav}>
            {showMenu && <Close onClick={toggleMenu} children='x'/>}
         </Nav>
      </Wrap>
   )
}

const Wrap = styled('div')``

export default Navbar
export { Navbar }