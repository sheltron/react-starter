const Normalize = require('./node_modules/normalize.scss/normalize.scss');
const AppStyles = require('./styles/app.scss');
const React     = require('react');
const ReactDOM  = require('react-dom');
const { Router, Route, IndexRoute, hashHistory, browserHistory } = require('react-router');
const ReactTransitionGroup = require('react-addons-transition-group');


const Layout        = require('./scripts/layout');
const Home          = require('./scripts/layouts/home');
const Projects      = require('./scripts/layouts/projects');
const ProjectSingle = require('./scripts/layouts/project-single');

const App = React.createClass({

	getInitialState: function() {
		return {
			projects: {}
		};
	},


	render () {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Home} />
					<Route path="/project" component={Projects} />
					<Route path='/project/:id' component={ProjectSingle} />
				</Route>
			</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));






