import { cssMargin } from './margin'
import { css } from 'styled-components'

const getTextTransform = (props: any) => {
   if (props.cap || props.capitalize) {
     return 'capitalize'
   } else if (props.upper || props.uppercase) {
      return 'uppercase'
   }

   return null
}
const getTextAlign = (props: any) => {
   if(props.align) return props.align
   if(props.left) return 'left'
   if(props.right) return 'right'
   if (props.center) return 'center'
   return null
}
export const cssText = css `
   ${cssMargin}
   font-size:  ${(props: any) => props.size};
   font-family:  ${(props: any) => props.family};
   text-align: ${getTextAlign}; 
   font-weight: ${(props: any) => props.weight};
   text-transform: ${getTextTransform};
   font-style: ${(props: any)=> (props.it || props.italic) && 'italic'};
`

export default cssText