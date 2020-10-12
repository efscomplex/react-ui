import Categories from 'components/Categories'
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Input } from 'styled-ui/components'
import CaptionCard from 'components/CaptionCard'
import { Fetch } from 'styled-ui/components'
import { Oval } from 'styled-ui/components'

const inputCss = css `
   background-color: var(--secondary);
   color: white;
`

function Main(props: any) {
   return (
      <main {...props}>
         <CaptionCard/>
         <Input mb='3rem' placeholder='Search Doctor Speciality' $expand css={inputCss}/>
         <Categories />
         <Fetch
            url='https://jsonplaceholder.typicode.com/todos/1'
            template={Todo}
            fallback={Oval}
         />
      </main>
   )
}
const Todo = ({ data }: any) => <div>
   <h1>{data.userId}</h1>
   <h1>{data.title}</h1>
   <h1>{data.completed}</h1>
</div>

export default styled(Main)` 
`