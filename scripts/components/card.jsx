const React = require('react');
const { Link } = require('react-router');

const Card = React.createClass({

	render() {
		return (
		<div className="col-4">
			<Link to={`\/project/${this.props.data.id}`}>
				<figure className="card">
					<img src={this.props.data.acf.masthead_image.replace('.jpg', '-150x150.jpg')} alt="" className="card__image" />
					<figcaption>
						<h3 className="card__title">{this.props.data.title.rendered}</h3>
					</figcaption>
				</figure>
			</Link>
		</div>
		)
	}

});

module.exports = Card;