import * as React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export interface Props {
	data: never[];
}

class PhotoList extends React.Component<Props>  {
	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};

	let photos = results.map((x: any, index: number) =>
		<div key={x.id}>
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
