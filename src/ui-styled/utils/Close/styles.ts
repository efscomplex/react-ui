import { css } from 'styled-components'

const w = '2rem'
export const cssStyles = css `
   width: ${(props:any) => props.size || w};
   height: ${(props:any) => props.size || w};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;   

   background-color: ${(props:any) => props.bg || '#333'};
   color: ${(props:any) => props.fg || 'white'};

   border-radius: 50%;  
`
