import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Vlog from './Vlog';
import About from './About';
import './Nav.css';

export default class Nav extends Component {
	render() {
		return (
			<Router>
				<div className="Nav">
          			<ul className="navItems">
						<li><Link to="/Vlog">Vlog</Link></li>
						<li><Link to="/About">About</Link></li>
					</ul>
					<Route path="/Vlog" component={Vlog} />
					<Route path="/About" component={About} />
				</div>
			</Router>
		);
	}
}