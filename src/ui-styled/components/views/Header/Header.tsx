import React from 'react';
import styled from 'styled-components';
import {cssFlex, cssPadding} from '../../../mixins'

const Header = ({children, ...props}: any) => {
   return (
      <header {...props}>
         {children}
      </header>
   );
}

const AppHeader = styled(Header)`
   padding: 1rem;
   ${cssPadding}
   ${cssFlex}
`
export default AppHeader
export { AppHeader as Header}