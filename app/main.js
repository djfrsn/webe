import React from 'react';
import ReactDOM from 'react-dom';
import WebEditor from 'WebEditor';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={WebEditor} />
	</Router>,
document.getElementById('root'));
