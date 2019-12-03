import * as React from 'react'
import { Link } from 'react-router-dom'

const MainSquare = ({id, title, alt}: any) => (
    <div className='view view-first' key={id}>
        <img src={title} alt={alt} />
        <div className='mask'>
            <h2>{id + 1}. {alt}</h2>
            <Link to={{  pathname: `/main/${id + 1}`, state: { modal: true }}} className='info'>Click Here</Link>
        </div>
    </div>
)

export default MainSquare


