import styled from "styled-components"
import { cssMargins, cssPaddings } from '../mixins/margins'

interface Props {
   [props: string]: any;
   align?: string;
   justify?: string;
   gap?: string;
}
const Inline = styled('div')`
   ${cssMargins}
   ${cssPaddings}
   display: flex;
   align-items: ${(props: Props) => props.align || 'flex-end'};
   justify-content: ${(props: Props) => props.justify};
   gap: ${(props: Props) => props.gap};
`
export default Inline
export {Inline}