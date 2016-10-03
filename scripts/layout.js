const React = require('react');


const Header = require('./components/header');

const Layout = (props) => (

	<main>
		<Header url="http://loc.sheltonclinard.com/wp-json/wp-api-menus/v2/menus/3"/>
		{props.children}
	</main>
);

module.exports = Layout;

