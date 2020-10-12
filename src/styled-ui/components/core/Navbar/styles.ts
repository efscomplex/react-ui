import { css } from 'styled-components/macro'

export const menuCss = css `
   background-color: white;
   color: gray;
   position: fixed;
   flex-direction: column;
   align-items: center;
   width: 100%;
   top: 0;
   left: 0;
`
const cssShow = css `
   display: ${(props: any) => props.show ? 'initial': 'none'};
`
export const mediaFrom = css `
   @media(min-width: ${(props:any)=> props.break || '500px'}){
      ${(props: any)=> props.animation || cssShow}
   }
`
