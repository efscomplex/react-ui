import Categories from 'components/Categories'
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Input } from 'styled-ui/components'
import CaptionCard from 'components/CaptionCard'

const inputCss = css `
   background-color: var(--secondary);
   color: white;
`

function Main(props: any) {
   return (
      <main {...props}>
         <CaptionCard/>
         <Input mb='3rem' placeholder='Search Doctor Speciality' expand css={inputCss}/>
         <Categories/>
      </main>
   )
}
export default styled(Main)`
  
`