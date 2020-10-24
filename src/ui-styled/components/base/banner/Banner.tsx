import styled from 'styled-components'
import {cssSize} from '../../../mixins'

const Banner =  styled('div')`
   position: relative;
   width: 100%;
   height: 40vh;
   ${cssSize}
   background: ${(props: any)=> props.bg};
   background-image: url("${(props: any) => props.img || props.src}");
   background-size: ${(props: any) => props.size || 'cover'};
   background-position: ${(props: any) => props.position || 'center'};
   background-repeat: ${(props: any) => props.repeat || 'no-repeat'};
`
export default Banner
export { Banner }



