import styled from "styled-components";
import { cssMargin, cssText } from '../../mixins'

const Title = styled('h1')`
   margin-bottom: .4rem;
   text-transform: capitalize;
   text-align: center;
   ${cssText}
   width: ${(props: any)=> props.width};
   height: ${(props: any)=> props.height};
   ${cssMargin}
`

export default Title
export { Title }