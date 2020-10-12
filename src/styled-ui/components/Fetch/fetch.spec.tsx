import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import {rest} from 'msw'
import  {setupServer} from 'msw/node'
import Fetch from './Fetch'

const server = setupServer(
   rest.get('/greeting', (req, res, ctx) => {
     return res(ctx.json({ greeting: 'hello there' }))
   })
 )
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const Card = ({ data }: any) => <div role='alert'>{data.greeting}</div>

test('', async () => {
   render(<Fetch url='/greeting' template={Card}/>)
   await waitForElement(()=>screen.getAllByRole('alert'))
   expect(screen.getByRole('alert')).toHaveTextContent('hello there')
})