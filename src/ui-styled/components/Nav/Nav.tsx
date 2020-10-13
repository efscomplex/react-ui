import React from 'react'
import { Route } from '../../../types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Props {
   className?: string;
   routes: Route[];
   $column?: any;
   height?: any;
   align?: any;
   gap?: any;
   activeClass?: string;
   [props: string]: any;
}

const Nav = ({routes=[], className, activeClass, ...props}: Props) => {
   return (
      <nav className={className}>
         {routes.map(route => 
            <NavLink key={route.path} exact to={route.path} activeClassName={activeClass}>{route.label}</NavLink>
         )}
         {props.children}
      </nav>
   )
}

const Wrap = styled(Nav).attrs(props =>({
   column: props.$column ? 'column' : null
}))`
   position: relative;
   height: ${(props: Props) => props.height};
   
   display: flex;
   align-items: ${(props: Props) => props.align};
   flex-direction: ${(props: Props) => props.column};
   gap: ${ (props: Props) => props.gap};
   
   a {
      padding: ${ (props: Props) => props.pd || '12px 16px'};
      text-transform: capitalize;
   }
`

export default Wrap
export { Wrap as Nav}
