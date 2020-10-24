import styled from "styled-components";
import { cssMargin, cssSize } from "../../mixins";

const getBorder = (props: any) => `${props.deep || '1px'} ${props.type || 'solid'} ${props.color || 'black'}`

const Line = styled('div')`
   width: 100%;
   margin: 8px ${(props: any)=> props.center ? 'auto' : 0};
   ${cssSize}
   ${cssMargin}
   border-bottom: ${getBorder};
`
export default Line 
export { Line }