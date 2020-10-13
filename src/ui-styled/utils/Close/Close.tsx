import React from 'react'
import styled from 'styled-components/macro'
import { cssStyles } from './styles'

function Close({ children, ...props }: any) {
   return (
      <div {...props} css={!children && cssStyles}>
         {'x' || children}
      </div>
   )
}

const Wrapper = styled(Close)`
	position: absolute;
	top: 1rem;
	right: 1rem;

	cursor: pointer;
`

export default Wrapper
export { Wrapper as Close }
