import React, {useContext} from 'react';
import styled from 'styled-components';
import { Nav } from 'ui-styled/components'
import {StoreContext} from 'store'

const Header = (props: any) => {
   const store = useContext(StoreContext)
   return (
      <header {...props}>
         <Nav routes={store.routes}/>
      </header>
   )
}

export default styled(Header)`
   .active {
      
   }
`
