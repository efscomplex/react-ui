import styled, { css } from 'styled-components/macro'
import { cssMargins } from 'ui-styled/mixins/margins'

export const Label = styled('label')`
   ${cssMargins}
   width: ${(props: any) => props.$expand ? '100%': 'max-content'};
   
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
export const StyInput = styled('input')`
   padding: 12px;
   ${(props: any) => props.fancy && cssFancyInput}
   border-radius: 6px;
   width: 100%;
`
