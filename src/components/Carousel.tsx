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
		axios.get(`https://spokane.bodiewebdesign.com/data.json`)
			.then((response: any) => {
				this.setState({
					photographs: response.data
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data');
			});
		}
	render() {
		const { photographs } = this.state;
		const { menu, alt, paragraph, minimum, maximum } = this.props;
		return (
			<div className='carousel-background'>
				<PhotoList data={photographs} menu={menu} alt={alt} paragraph={paragraph} minimum={minimum} maximum={maximum} />
			</div>
		);
	}
}

export default Carousel;
