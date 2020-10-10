import React from 'react'
import styled from 'styled-components'
import { Avatar, Btn } from 'styled-ui/components'
import { Inline, Text, List } from 'styled-ui/utils'
import { categories } from 'config'

export default function() {
   
   return (
      <Categories>
         <Inline justify='space-between' mb='2rem'>
            <Text as='h1'>Categories</Text>
            <Inline gap='16px'>
               <Btn theme={primaryTheme}>About</Btn>
               <Btn theme={secondaryTheme}>Children</Btn>
            </Inline>
         </Inline>
         <Inline gap='1rem' justify='center'>
            {categories.map( (cat) =>
               <List key={cat.label} align='center' gap='6px'>
                  <Avatar size='4rem' src={cat.img} />
                  <span>{cat.label}</span>
               </List>
            )}
         </Inline>
      </Categories>
   )
}
const primaryTheme = {
   bg: 'var(--primary)',
   fg: 'white'
}
const secondaryTheme = {
   bg: 'var(--secondary)',
   fg: 'white'
}

const Categories = styled('div')`
   
`
