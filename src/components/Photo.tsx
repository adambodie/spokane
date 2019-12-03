import * as React from 'react'

const Photo = ({id, title}: any) => (
	<div>
		<img src={`/assets/images/${id}_o.jpg`} alt={title}/>
		<h4>{title}</h4>
	</div>
)

export default Photo
