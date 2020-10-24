import React from 'react'
import styled, {css} from 'styled-components'
import { cssMargin, cssPadding } from '../../../mixins'

const themeCss = css `
   background-color: ${props => props.theme.bg};
   color: ${props=> props.theme.fg};
   border: 1px solid ${props=> props.theme.fg};
`
interface Props {
   label?: string;
   children?: JSX.Element;
   [prop: string]: any;
}

function Button({ label, children, ...props }: Props) {
   return (
      <button {...props}>
         {label}
         {children}
      </button>
   )
}

const Btn = styled(Button)`
   padding: .4rem 1.4rem;
   ${cssMargin}
   ${cssPadding}
   
   width: 10rem;
   
   background-color: ${(props: any) => props.bg};
   color: ${(props: any) => props.color || props.fg};
   border-color: ${(props: any) => props.fg && `1px solid ${props.fg}`};
   ${(props: any) => props.theme && themeCss}
   
   border-radius: 6px;

   transition: all ease .3s;
   &:focus{
      outline: none;
   }
   &:active {
      transform: scale(1.025);
   }
`
export default Btn
export { Btn }