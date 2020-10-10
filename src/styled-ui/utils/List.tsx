import styled from "styled-components"
import { cssMargins } from '../mixins/margins'

interface Props {
   [props: string]: any;
   align?: string;
   justify?: string;
   gap?: string;
}
const List = styled('div')`
   ${cssMargins}
   display: flex;
   flex-direction: column;
   align-items: ${(props: Props) => props.align};
   justify-content: ${(props: Props) => props.justify};
   gap: ${(props: Props) => props.gap};
`
export default List
export {List}