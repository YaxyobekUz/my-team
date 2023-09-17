import React from 'react';
import circleShape from '../assets/images/circle-shape4.svg';

const AboutPageHero = () => {
    return (
        <section className='py-120 relative'>
            <div className="flex items-start gap-30px container">
                <h2 className="leading-100 text-64 max-w-350 w-full">About</h2>
                <div>
                    <div className="restangle-shape mb-10"></div>
                    <p className="">We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
                </div>
            </div>
            <img width={200} height={200} className='absolute bottom-0 -right-100' src={circleShape} alt="this is circle shape" />
        </section>
    )
}

export default AboutPageHero