import React from 'react'
import {Route} from '../../../types'
import styled from 'styled-components'

interface Props {
   routes: Array<Route>;
   column: any;
   [props: string]: any;
}

const Nav = ({routes=[], ...props}: Props) => {
   return (
      <nav {...props}>
         {routes.map(route => 
            <a key={route.path} href={route.path}>{route.label}</a>
         )}
         {props.children}
      </nav>
   );
}

const Wrap = styled(Nav).attrs(props =>({
   column: props.column ? 'column' : null
}))`
   position: relative;
   display: flex;
   align-items: ${(props: Props) => props.align};
   flex-direction: ${(props: Props) => props.column};
   height: ${(props: Props) => props.height};
   gap: ${ (props: Props) => props.gap};

   a {
      padding: ${ (props: Props) => props.pd || '12px 16px'};
   }
`

export default Wrap
export { Wrap as Nav}
