import React from 'react'
import styled from 'styled-components'
import { mediaMinWidth } from '../../resources'

type Sizes = 'small' | 'medium' | 'large' | 'x-large'
type MediaEntry = [Sizes,string | number]

//const sizesMap: Map<Sizes, string | number> = new Map([['small', 0], ['medium', 1], ['large', 2], ['x-large', 3]])

interface Props {
   [props: string]: any
   media: MediaEntry[] | [] 
}

function Inner({media, children, ...props }: Props) {
   return (
      <div {...props}>
         {children}
      </div>
   )
}
// console.log(breaks)
function sort(media: any) {
   return media.sort(
      (prev: Sizes, curr: Sizes) => media
   )
}
function getCssMediaStyles(props: any) {
   let css = ''
   const medias = sort(props.media)

   medias.forEach(
      (key: Sizes) => {
         if (key === 'small') {
            css += medias.get(key) 
         } else {
            css += mediaMinWidth(medias.get(key))
         }
      }
   )
   return css
}
const Wrapper = styled(Inner).attrs((props: Props) => ({
   media: props.media || []
}))`
  ${getCssMediaStyles}
`
export default Wrapper
export { Wrapper as Inner }