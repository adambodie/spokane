import * as React from 'react';
import * as axios from 'axios';
import PhotoList from './PhotoList';


export interface Props {
	photoset_id: string;
	per_page: string;
	menu: string;
}

interface State {
	photographs: any;
}

const formUrl = (photoset_id: string, per_page: string) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=${photoset_id}&user_id=8994820%40N07&per_page=${per_page}&format=json&nojsoncallback=1`;

class Carousel extends React.Component<Props, State>  {
	constructor(props: Props) {
		super(props);
		this.state = {
			photographs: []
		};
    }
	componentDidMount() {
		let photoset_id = this.props.photoset_id;
		let per_page = this.props.per_page;
		const url = formUrl(photoset_id, per_page);
		axios.get(url)
			.then((response: any) => {
				this.setState({
					photographs: response.data.photoset.photo,
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing Photographs data', error);
			});
		}
	render() {
		return (
			<div className='carousel-background'>
				<PhotoList data={this.state.photographs} menu={this.props.menu} />
			</div>
		);
	}
}

export default Carousel;
