import * as React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export interface Props {
	data: never[];
	menu: string;
	alt: string;
	paragraph: string;
}

class PhotoList extends React.Component<Props>  {
	render() {
		let results = this.props.data;
		let menu = this.props.menu;
		let paragraph = this.props.paragraph;
		let alt = this.props.alt;
		const settings = {
			dots: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};

	let photos = results.map((x: any, index: number) =>
		<div key={x.id}>
			<img src={menu} alt="Header" className="header"/>
			<Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} index={index + 1} />
		</div>
	)
  
	  return(
		<div>
			<Slider {...settings}>
				{photos}
			</Slider>
				<div className="info">
					<h1>{alt}</h1>
					<p>{paragraph}</p>
				</div>
		</div>
		);
	}
}

export default PhotoList;
