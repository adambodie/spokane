import * as React from 'react';
import * as axios from 'axios';
import PhotoList from './PhotoList';


export interface Props {
	menu: string;
	alt: string;
	paragraph: string;
	minimum: number;
	maximum: number;
}

interface State {
	photographs: any;
}


class Carousel extends React.Component<Props, State>  {
	constructor(props: Props) {
		super(props);
		this.state = {
			photographs: []
		};
    }
	componentDidMount() {
		axios.get(`https://s3-us-west-2.amazonaws.com/spokane.bodiewebdesign.com/data.json`)
			.then((response: any) => {
				this.setState({
					photographs: response.data
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing Photographs data', error);
			});
		}
	render() {
		return (
			<div className='carousel-background'>
				<PhotoList data={this.state.photographs} menu={this.props.menu} alt={this.props.alt} paragraph={this.props.paragraph} minimum={this.props.minimum} maximum={this.props.maximum} />
			</div>
		);
	}
}

export default Carousel;
