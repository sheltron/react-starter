const React = require('react');
const { Link } = require('react-router');

const Home = React.createClass({

	render() {
		return(
			<Link to={'/project'}>
				to projects
			</Link>
		)
	}

});

module.exports = Home;