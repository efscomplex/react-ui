import styled, { css } from 'styled-components/macro'
import React from 'react'
import { cssMargins } from '../../mixins/margins'

/* NOTE pass the fancy attribute to change the input style */
interface Props {
   [prop: string]: any;
   fancy?: string;
   label?: string;
   expand?: boolean;
   children?: any;
   mb?: string;
}

function Input({label, ...props}: Props) {
   return (
		<Label {...props}>
			{label && <span>{label}</span>}
         <StyInput {...props}/>
		</Label>
	)
}

const Label = styled('label')`
   ${cssMargins}
   width: ${(props: any) => props.expand && '100%'};
   
   display: flex;
   align-items: flex-end;

   line-height: 1em;
   cursor: pointer;
   
   span{
      text-transform: capitalize;
      margin-right: 12px;
   }
`
const cssFancyInput = css `
   border: none;
   padding:0 0 1px 0;
   border-bottom: 1px solid gray;
   background-color: transparent;
   color: inherit
`
const StyInput = styled('input')`
   padding: 12px;
   ${(props: any) => props.fancy && cssFancyInput}
   border-radius: 6px;
   width: 100%;
`
// const StyledInput = styled(Input)``

export default Input
export { Input }