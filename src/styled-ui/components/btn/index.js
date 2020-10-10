import styled, {css} from 'styled-components'

const themeCss = css`
   background-color: ${props => props.theme.bg};
   color: ${props=> props.theme.fg};
   border: 1px solid ${props=> props.theme.fg};
`
export const Btn = styled('button')`
   padding: .4rem 1.4rem;

   background-color: ${props => props.bg};
   color: ${props => props.color || props.fg};
   border-color: ${props => props.fg && `1px solid ${props.fg}`};
   ${props => props.theme && themeCss}
   
   border-radius: 6px;

   transition: all ease .3s;
   &:focus{
      outline: none;
   }
   &:active {
      transform: scale(1.025);
   }
`
