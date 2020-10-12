import styled from 'styled-components'
interface Props {
   size?: string;
   width?: string;
   [props: string]: any
}
const Img = styled('img').attrs((props:Props)=>({
   ratio: props.ratio || 1
}))`
   max-width: 100%;
   object-fit: cover;
   max-height: 100%;
   object-position: center;
   width: ${(props: Props)=> props.size || props.width};
   height: ${(props: Props)=> (props.size && `calc(${props.size} * ${props.ratio})`) || props.height};
`
export default Img
export {Img}