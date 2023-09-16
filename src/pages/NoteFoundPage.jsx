import React from 'react'
import { Link } from 'react-router-dom'

const NoteFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center container">
            <h1 className="text-9xl">404</h1>
            <p className="text-5xl text-secondary-rapture_blue mb-5">Page not found :(</p>
            <Link className='text-primary-light_coral text-xl' to='/'>{'< Back to home'}</Link>
        </div>
    )
}

export default NoteFoundPage