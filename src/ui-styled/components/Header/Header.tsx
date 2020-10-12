import React from 'react';
import styled from 'styled-components';

const Header = ({children, ...props}: any) => {
   return (
      <header {...props}>
         {children}
      </header>
   );
}

export default styled(Header)`
   padding: ${(props:any) => props.pd || '1rem'};
   display: flex;
   align-items: ${(props: any)=> props.align || 'center'};
   justify-content: space-between;
`
