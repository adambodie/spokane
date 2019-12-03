import * as React from 'react'
import MainRoutes from './MainRoutes'
import MainSquares from './MainSquares'

const Main = () => (
	<div className='main'>
		<h1 className='title animated rollIn'>Pigging Out in Spokane</h1>
		<h6 className='subtitle'>A Trip Years in the Making</h6>
		<MainSquares />
		<MainRoutes />
	</div>
)

export default Main
