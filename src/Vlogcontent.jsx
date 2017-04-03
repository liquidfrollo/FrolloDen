import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';


export default class Vlogcontent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: []
		};
	}
	componentWillMount() {
		let apiKey = 'AIzaSyCq_V023hJGI941qnY4wJmyaqz0WK5sGbc';
		let channelId = 'UCv5DBirtU8jhUWMh2H2V2mw'
		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+channelId+'&key='+apiKey+'&order=date&maxResults=50';
	    Request.get(url)
	        .end((error, response) => {
	            if (!error && response) {
	                this.setState({ 
	                	content: response.body.items
	                });
	                console.log('Success');
	            } else {
	                console.log('There was an error fetching from YouTube', error);
	            }
	        }
	    );
	}

	posts(content) {
		return (
			<li>
				{content.snippet.title}
			</li>
		);
	}

	render(){
		var videos = _.map(this.state.content, this.posts);
		return(
			<div>
				<h2>Vlog</h2>
				<ul>
					{videos}
				</ul>
			</div>
		);

	}
}

