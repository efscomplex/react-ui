import React from 'react';
import styled from 'styled-components';

import { Title, Text, Img, Heading } from '../../helpers'
import {Btn} from '../../base/btn/index'

import {cssGrid, cssMargin, cssPadding, cssSize } from '../../../mixins'

interface ICard {
   ({ children, ...props }: any): any
   Header: any,
   Body: any,
   Footer: any,
   Title: any;
   Text: any;
   Btn: any;
   Img: any;
   Heading: any;
}
const Header = styled('section')`
   padding-bottom: ${(props: Props)=> props.gap || '2rem'};
   ${cssPadding}
`
const Body = styled('section')`
   padding-bottom: ${(props: Props)=> props.gap || '2rem'};
   ${cssPadding}
`
const Footer = styled('section')`
   padding-bottom: ${(props: Props)=> props.gap || '1rem'};
   ${cssPadding}
`

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
   card.Title = Title
   card.Text = Text
   card.Img = Img
   card.Btn = Btn
   card.Heading = Heading

   return card
}

interface Props {
   [prop: string]: any;
   $grid?: boolean;
   gap?: string;
}
const Wrapper = styled(getCard())`
   ${cssPadding}
   ${cssMargin}
   ${cssSize}
   ${(props: Props)=> {if(props.$grid) return cssGrid}}
`

export default Wrapper
export { Wrapper as Card}
