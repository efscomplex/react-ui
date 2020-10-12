import React from 'react'
import styled, { css } from 'styled-components/macro'

function Close({ children, ...props }: any) {
   return (
      <div {...props} css={!children && cssStyles}>
         {'x' || children}
      </div>
   )
}

const w = '2rem';
const cssStyles = css `
   width: ${(props:any) => props.size || w};
   height: ${(props:any) => props.size || w};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;   

   background-color: ${(props:any) => props.bg || '#333'};
   color: ${(props:any) => props.fg || 'white'};

   border-radius: 50%;  
`
const Wrapper = styled(Close)`
	position: absolute;
	top: 1rem;
	right: 1rem;

	cursor: pointer;
`

export default Wrapper
export { Wrapper as Close }
