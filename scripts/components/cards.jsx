const React = require('react');

const Card = require('./card');

const Cards = React.createClass({
	getInitialState: function () {
		return {
			cardItems: []
		};
	},

	componentWillMount: function () {
		fetch(this.props.url)
			.then((response) => (
				response.json().then((data) => (
					this.setState({
						cardItems: data
					})
				))
			));
	},

	render() {
		return (
			<div className="row">
				{this.state.cardItems.map((card) => (
					<Card key={card.id} data={card} />
				))}
			</div>
		)
	}
});

module.exports = Cards;