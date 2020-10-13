import { Route } from 'types'
import {createStore} from 'ui-styled/context'

interface Store {
   routes: Route[]
}
const store: Store = {
   routes: [
      {path: '', label: 'Home'},
      {path: '/classes', label: 'classes'},
      {path: '/about', label: 'about'},
      {path: '/teachers', label: 'teachers'},
   ]
}

const StoreContext = createStore(store)

export default StoreContext
export { StoreContext, store}