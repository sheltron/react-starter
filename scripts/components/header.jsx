const React = require('react');
const { string } = React.PropTypes;
const { Link } = require('react-router');


const Header = React.createClass({

	propTypes: {
		url: string
	},

	getInitialState: function() {
		return {
			menuItems: []
		};
	},

	componentDidMount: function() {
		fetch(this.props.url)
			.then((response) => (
				response.json().then((data) => (
					this.setState({
						menuItems: data.items
					})
				))
			));
	},

	render() {
		return (
			<header>
				<div className="container">
					<ul className="navigation__list">
						<Link to='/'>
							<li className="navigation__item">Home</li>
						</Link>
						{this.state.menuItems.map((item) =>(
							<Link to={`/${item.title}`} key={item.id}>
								<li className="navigation__item">{item.title}</li>
							</Link>
						))}
					</ul>
				</div>
			</header>
		);
	}

});

module.exports = Header;