import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { withRouter } from 'ui-styled/HOCs/index'

const AppRouter = withRouter(App)

ReactDOM.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
	document.getElementById('root')
)
serviceWorker.unregister()
