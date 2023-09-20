import React from 'react';
import circleShape from '../assets/images/circle-shape4.svg';

const AboutPageHero = () => {
    return (
        <div className='py-120 relative max-730:py-28 max-370:pt-84 max-370:pb-28'>
            <div className="flex items-start gap-30px container max-730:flex-col max-730:items-center max-730:text-center">
                <h1 className="leading-100 text-64 max-w-350 w-full small-h1">About</h1>
                <div className='z-1'>
                    <div className="restangle-shape mb-10"></div>
                    <p className='max-730:max-w-457'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
                </div>
            </div>
            <img width={100} height={200} className='absolute bottom-0 right-0 h-200 bg-cover object-left object-cover z-0 max-1200:-bottom-100 max-730:bottom-0 max-640:-bottom-100' src={circleShape} alt="this is circle shape" />
        </div>
    )
}

export default AboutPageHero