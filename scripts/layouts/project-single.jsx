const React = require('react');
const { object } = React.PropTypes;

const { ProjectURL }= require('scripts/paths');

const ProjectSingle = React.createClass({

	/**
	 * Set initial state so that the render function doesn't blow up
	 * @returns {{project: {title: {rendered: string}, content: {rendered: string}}}}
	 */
	getInitialState: function() {
		return {
			project: {
				title: {
					rendered: ''
				},
				content: {
					rendered: ''
				}
			}
		};
	},

	/**
	 * When the component mounts, request the Projects and filter them by the parameters id, and pass this to the componenets state
	 */
	componentDidMount() {
		const params = this.props.params || {};

		fetch(ProjectURL).then((response) => {
			response.json().then((data) => {
				const currentProject = data.filter((project) => (
					project.id == params.id
				));

				this.setState({
					project: currentProject[0],
				});
			})
		});
	},

	render: function() {
		const project = this.state.project;

		return (
			<div className="container">
				<div className="row">
					<h1>{project.title.rendered}</h1>
					<h1>{project.content.rendered}</h1>
				</div>
			</div>
		);
	}

});

module.exports = ProjectSingle;