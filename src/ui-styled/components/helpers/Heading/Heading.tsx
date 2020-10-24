import React from 'react';
import styled from 'styled-components'
import { cssMargin } from '../../../mixins'

interface Props {
   title: JSX.Element;
   subtitle: JSX.Element;
   caption: JSX.Element;
   [props: string]: any;
}
function Heading({ children, title, subtitle, caption, ...props }: Props) {
   return (
      <div {...props}>
         {title && <span className='title'>{title}</span>}
         {subtitle && <span className='subtitle'>{subtitle}</span>}
         {caption && <span>{caption}</span>}
         {children}
      </div>
   )
}
const ratio = .75
const Wrapper = styled(Heading)`
   ${cssMargin}
   text-align: ${(props: any)=> props.center && 'center'};
   span { display: block; }
   .title {
      font-size: ${(props: any)=> props.size || '2rem'};
      margin-bottom: .4rem;
      text-transform: capitalize;
   }
   .subtitle {
      font-size: ${(props: any)=> `calc(${props.size || '2rem'}*${ratio})`};
      margin-bottom: .4em;
      opacity: .8;
   }
`

export default Wrapper
export { Wrapper as Heading }