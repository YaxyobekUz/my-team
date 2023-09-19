import React from 'react'
import circleShape from '../assets/images/circle-shape.svg'
import circleShapes from '../assets/images/circle-shapes.svg'

const IndexHero = () => {
    return (
        <div className='pt-120 pb-250 max-730:pt-28 max-540:pt-24 max-540:pb-56 max-370:pt-20 max-370:pb-48'>
            <div className="flex items-stretch gap-30px container relative max-730:flex-col max-730:items-center max-730:text-center max-730:gap-6 max-730:text-64 max-730:leading-56">
                <h1 className="text-100 max-w-635 leading-100 font-bold mr-auto max-1050:text-80 max-1050:leading-88 max-940:text-7xl max-940:w-full max-940:max-w-max max-800:text-68 max-800:leading-68 max-730:m-0 max-730:text-64 max-730:leading-56 max-540:text-6xl max-440:leading-48 max-440:text-5xl max-370:text-40 max-370:leading-40">Find the <br /> best <span className="text-primary-light_coral">talent</span></h1>
                <div className='flex flex-col max-h-full relative'>
                    <div className="restangle-shape bg-secondary-rapture_blue"></div>
                    <p className="max-w-445 max-940:text-base max-940:leading-7 mt-auto max-730:text-15 max-730:mt-0">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
                <img width={200} height={200} className='absolute -left-265' src={circleShape} alt="" aria-hidden='true' />
                <img width={358} height={100} className='flex items-start absolute -bottom-250 right-5 object-cover object-top h-100 max-730:right-auto' src={circleShapes} alt="" aria-hidden='true' />
            </div>
        </div>
    )
}

export default IndexHero