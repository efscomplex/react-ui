import { css } from 'styled-components/macro'

const cssGrid =  css `
   display: grid;
   grid-template-areas: ${(props: any)=> props.areas};
   grid-template-columns: ${(props: any)=> props.cols};
   grid-template-rows: ${(props: any)=> props.rows};
   grid-gap: ${(props: any) => props.gap};
`
export default cssGrid
export { cssGrid }