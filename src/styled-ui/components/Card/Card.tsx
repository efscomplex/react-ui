import styled  from 'styled-components';
import React from 'react';
import cssGrid from '../../mixins/grid'

interface ICard {
   ({ children, ...props }: any): any
   Header: any,
   Body: any,
   Footer: any,
}
const Header = styled('section')``
const Body = styled('section')``
const Footer = styled('section')``

function getCard() {
   const card = function Card({ children, ...props }: any) {
      return (
         <div {...props}>
            {children}
         </div>
      )
   } as ICard

   card.Header = Header
   card.Body = Body
   card.Footer = Footer

   return card
}
const Wrapper = styled(getCard())`
   padding: ${(props: any) => props.pd};
   ${(props: any)=> props.$grid && cssGrid}
   & > * {
      padding-bottom: ${(props: any)=> props.gap || '1rem'};
   }
`

export default Wrapper
export { Wrapper as Card}
