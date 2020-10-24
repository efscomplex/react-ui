import { css } from 'styled-components/macro'

const cssFlex = css `
   display: flex;
   justify-content: ${(props: any)=> props.justify || 'space-between'};
   align-items: ${(props: any)=> props.align || 'center'};
`
const cssFlexItem = css `
   align-self: ${(props: any) => props.aSelf};
   justify-self: ${(props: any) => props.jSelf};
`

export { cssFlex, cssFlexItem }