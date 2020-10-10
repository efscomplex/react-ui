import { css } from 'styled-components/macro'

export default css `
   display: grid;
   grid-template-areas: ${(props: any)=> props.areas};
   grid-template-columns: ${(props: any)=> props.cols};
   grid-template-rows: ${(props: any)=> props.rows};
`