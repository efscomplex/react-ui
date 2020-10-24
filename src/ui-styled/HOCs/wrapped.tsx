import React from 'react'
import styled from 'styled-components'

export const wrapped = (Comp: React.FC) => {
   const Wrapper = styled('div')``
   return ({ children, ...props }: any) => <Wrapper {...props}>
      <Comp> 
         {children}
      </Comp>   
   </Wrapper>
}
