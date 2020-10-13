import {createContext} from 'react'


function createStore<T>(initialState: T) {
   return  createContext(initialState)
   
}

export default createStore
export { createStore }
