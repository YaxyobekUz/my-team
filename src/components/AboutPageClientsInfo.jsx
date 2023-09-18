import React from 'react';
import circleShape from '../assets/images/circle-shape5.svg';
import theVerge from '../assets/images/theverge-image.png';
import theJakartaPost from '../assets/images/thejakartapost-image.png';
import theGuardian from '../assets/images/theguardian-image.png';
import techradar from '../assets/images/techradar-image.png';
import gadgetsNow from '../assets/images/gadgetsnow-image.png';

const AboutPageClientsInfo = () => {
    return (
        <section className='py-140 bg-secondary-sacramento_state_green relative'>
            <img width={200} height={200} className='absolute top-0 left-0' src={circleShape} alt="circle shape" />
            <div className="container">
                <h2 className="text-center mb-16 max-w-917">Some of our clients</h2>
                <ul className="flex items-center gap-5 justify-between flex-wrap">
                    <li>
                        <img width={165} height={28} src={theVerge} alt="company image" />
                    </li>
                    <li>
                        <img width={184} height={23} src={theJakartaPost} alt="company image" />
                    </li>
                    <li>
                        <img width={180} height={28} src={theGuardian} alt="company image" />
                    </li>
                    <li>
                        <img width={165} height={28} src={techradar} alt="company image" />
                    </li>
                    <li>
                        <img width={98} height={45} src={gadgetsNow} alt="company image" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutPageClientsInfo