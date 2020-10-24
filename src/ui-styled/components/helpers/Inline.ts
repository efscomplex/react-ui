import styled from "styled-components"
import { cssMargin, cssPadding, cssSize } from '../../mixins'

interface Props {
   [props: string]: any;
   align?: string;
   justify?: string;
   gap?: string;
   wrap?: boolean;
}
const Inline = styled('div')`
   ${cssMargin}
   ${cssPadding}
   ${cssSize}
   display: flex;
   flex-wrap: ${(props: Props)=> props.wrap && 'wrap'};
   align-items: ${(props: Props) => props.align || 'flex-end'};
   justify-content: ${(props: Props) => props.center && 'center'};
   justify-content: ${(props: Props) => props.justify};
   gap: ${(props: Props) => props.gap};
`
export default Inline
export {Inline}