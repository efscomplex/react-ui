import {useState} from 'react'

function useToggle(initial:boolean = false) {
   const [state, setState] = useState(initial)
   const toggle = () => setState(
      (value: boolean) => !value
   )
   return {
      state,
      toggle
   }
}

export default useToggle
export { useToggle } 