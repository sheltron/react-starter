const React = require('react');
var CSSTransitionGroup = require('react-addons-css-transition-group');


const Cards = require('../components/cards');

const Projects = React.createClass({

	render() {
		return(
		<CSSTransitionGroup  transitionName="slidein"
		                     transitionAppear={true}
		                     transitionEnterTimeout={0}
		                     transitionAppearTimeout={100}
		                     transitionLeaveTimeout={0}>
			<section className="projects">
				<div className="container">
					<Cards url="http://loc.sheltonclinard.com/wp-json/wp/v2/project" />
				</div>
			</section>
		</CSSTransitionGroup>
		)
	}
});

module.exports = Projects;