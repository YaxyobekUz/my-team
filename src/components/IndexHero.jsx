import React from 'react'
import circleShape from '../assets/images/circle-shape.svg'
import circleShapes from '../assets/images/circle-shapes.svg'

const IndexHero = () => {
    return (
        <div className='pt-120 pb-250'>
            <div className="flex items-center container relative">
                <h1 className="text-100 max-w-635 w-full leading-100 font-bold mr-30">Find the <br /> best <span className="text-primary-light_coral">talent</span></h1>
                <div>
                    <div className='restangle-shape mb-79 bg-secondary-rapture_blue'></div>
                    <p className="max-w-445">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
                <img width={200} height={200} className='absolute -left-265' src={circleShape} alt="" aria-hidden='true' />
                <img width={358} height={100} className='flex items-start absolute -bottom-250 right-5 object-cover object-top h-1/2' src={circleShapes} alt="" aria-hidden='true' />
            </div>
        </div>
    )
}

export default IndexHero