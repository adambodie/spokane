import * as React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export interface Props {
	data: never[];
	menu: string;
}

class PhotoList extends React.Component<Props>  {
	render() {
		let results = this.props.data;
		let menu = this.props.menu;
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
		</div>
		);
	}
}

export default PhotoList;
