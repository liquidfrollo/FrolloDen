import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import './VlogContent.css';


export default class Vlogcontent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: []
		};
	}
	componentWillMount() {
		let apiKey = 'AIzaSyCq_V023hJGI941qnY4wJmyaqz0WK5sGbc'; /** Must allow current IP **/
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

			<div className="vlogTiles">
				<div className="vlogTilesContent" >
					<li className="vlogTitle">
						{content.snippet.title}
					</li>
					<li className="vlogImage">				
						<img src={content.snippet.thumbnails.medium.url} alt="{content.snippet.title}" className="vlogImage"/>
					</li>
					<li className="vlogDescription">
						{content.snippet.description}
					</li>
					<li className="vlogPublished">
						{content.snippet.publishedAt}
					</li>
				</div>

			</div>
		);
	}

	render(){
		let videos = _.map(this.state.content, this.posts);
		console.log(this.state);
		return(
			<div>
				<div className="vlogHeader">
					<h2>Welcome to the Vlog check out the videos!</h2>
				</div>
				<div className="vlogTileContainer" key={this.posts}>
					<ul key={this.posts}>
						{videos}
					</ul>
				</div>
			</div>
		);

	}
}

