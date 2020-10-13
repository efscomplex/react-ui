import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

export default function withRouter(Comp: React.FC) {
   return (props: any) => <Router>
      <Comp {...props}/>
   </Router>
}

export { withRouter }