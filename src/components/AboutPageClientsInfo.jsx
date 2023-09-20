import React from 'react';
import circleShape from '../assets/images/circle-shape5.svg';
import theVerge from '../assets/images/theverge-image.png';
import theJakartaPost from '../assets/images/thejakartapost-image.png';
import theGuardian from '../assets/images/theguardian-image.png';
import techradar from '../assets/images/techradar-image.png';
import gadgetsNow from '../assets/images/gadgetsnow-image.png';

const AboutPageClientsInfo = () => {
    return (
        <section className='py-140 bg-secondary-sacramento_state_green relative max-940:py-28 max-730:py-100 z-1 max-370:py-'>
            <img width={200} height={200} className='absolute top-0 left-0 max-730:-top-100 max-370:-left-100' src={circleShape} alt="circle shape" />
            <div className="container">
                <h2 className="text-center mb-16 max-w-917 mx-auto max-940:mb-14 max-730:mb-12 max-640:mb-60px">Some of our clients</h2>
                <ul className="flex items-center gap-5 justify-between max-640:flex-col max-640:gap-56px">
                    <li>
                        <img className='max-1050:w-32 max-1050:h-21 max-730:w-100 max-730:h-4 max-640:w-36 max-640:h-6' width={165} height={28} src={theVerge} alt="company image" />
                    </li>
                    <li>
                        <img className='max-1050:w-32 max-1050:h-4 max-730:w-28 max-730:h-14px max-640:w-40 max-640:h-5' width={184} height={23} src={theJakartaPost} alt="company image" />
                    </li>
                    <li>
                        <img className='max-1050:w-32 max-1050:h-19 max-730:w-28 max-730:h-17 max-640:w-40 max-640:h-6' width={180} height={28} src={theGuardian} alt="company image" />
                    </li>
                    <li>
                        <img className='max-1050:w-32 max-1050:h-21 max-730:w-100 max-730:h-17 max-640:w-36 max-640:h-6' width={165} height={28} src={techradar} alt="company image" />
                    </li>
                    <li>
                        <img className='max-1050:w-20 max-1050:h-9 max-730:w-60px max-730:h-7 max-640:w-86 max-640:h-10' width={98} height={45} src={gadgetsNow} alt="company image" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutPageClientsInfo