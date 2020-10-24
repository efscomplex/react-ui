import styled from "styled-components"
import { cssMargin } from '../../mixins/margin'

interface Props {
   [props: string]: any;
   align?: string;
   justify?: string;
   gap?: string;
}
const List = styled('div')`
   ${cssMargin}
   display: flex;
   flex-direction: column;
   align-items: ${(props: Props) => props.align};
   justify-content: ${(props: Props) => props.justify};
   gap: ${(props: Props) => props.gap};
`
export default List
export {List}