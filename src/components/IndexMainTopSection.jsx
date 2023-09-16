import React from 'react';
import boyImg from '../assets/images/boy-icon.svg';
import parameterImg from '../assets/images/parameter-icon.svg';
import statisticsImg from '../assets/images/statistics-icon.svg';
import shapeImg from '../assets/images/circle-shape1.svg';

const IndexMainTopSection = () => {
    return (
        <section className='bg-secondary-sacramento_state_green py-140'>
            <div className="grid container grid-cols-2 gap-5 justify-between items-start relative">
                <div>
                    <div className="restangle-shape mb-52"></div>
                    <h2 className="max-w-445">Build & manage distributed teams like no one else.</h2>
                </div>
                <ul className="space-y-8 mt-52">
                    <li className="flex items-start">
                        <img width={72} height={72} src={boyImg} alt="boy icon" className="mr-6" />
                        <div className='max-w-445'>
                            <h3 className="text-primary-light_coral mb-4">Experienced Individuals</h3>
                            <p className="small-p opacity-8">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <img width={72} height={72} src={parameterImg} alt="parameter icon" className="mr-6" />
                        <div className='max-w-445'>
                            <h3 className="text-primary-light_coral mb-4">Easy to Implement</h3>
                            <p className="small-p opacity-8">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <img width={72} height={72} src={statisticsImg} alt="statistics icon" className="mr-6" />
                        <div className='max-w-445'>
                            <h3 className="text-primary-light_coral mb-4">Enhanced Productivity</h3>
                            <p className="small-p opacity-8">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </li>
                </ul>
                <img width={200} height={244} className='absolute -right-265 -bottom-140' src={shapeImg} alt="" aria-hidden='true' />
            </div>
        </section>
    )
}

export default IndexMainTopSection