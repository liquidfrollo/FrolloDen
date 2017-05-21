import React, { Component } from 'react';
import Vlogcontent from './Vlogcontent';
import './Vlog.css';

export default class Vlog extends Component {
	render() {
		return(
			<div>
				<h2 className="vlogTitle"><Vlogcontent /></h2>
			</div>
		);
	}
}