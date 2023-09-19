import React from 'react';
import boyImg from '../assets/images/boy-icon.svg';
import parameterImg from '../assets/images/parameter-icon.svg';
import statisticsImg from '../assets/images/statistics-icon.svg';
import shapeImg from '../assets/images/homepage_circleshape.svg';

const IndexMainTopSection = () => {
    return (
        <section className='bg-secondary-sacramento_state_green py-140 relative max-800:py-32 max-730:py-100'>
            <div className="grid container grid-cols-2 gap-5 max-730:gap-0 justify-between items-start max-730:grid-cols-1">
                <div className='max-730:mb-16'>
                    <div className="restangle-shape mb-52 max-730:block max-730:mb-8"></div>
                    <h2 className="max-w-445 max-640:max-w-65vw">Build & manage distributed teams like no one else.</h2>
                </div>
                <ul className="space-y-8 mt-52 z-2 max-730:mt-0 max-370:space-y-12">
                    <li className="flex items-start max-370:flex-col max-370:text-center max-370:items-center">
                        <img width={72} height={72} src={boyImg} alt="boy icon" className="mr-6 max-370:mr-0 max-370:mb-4" />
                        <div className='max-w-445 max-730:max-w-max'>
                            <h3 className="text-primary-light_coral mb-4 max-370:mb-2">Experienced Individuals</h3>
                            <p className="small-p opacity-8">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </li>
                    <li className="flex items-start max-370:flex-col max-370:text-center max-370:items-center">
                        <img width={72} height={72} src={parameterImg} alt="parameter icon" className="mr-6 max-370:mr-0 max-370:mb-4" />
                        <div className='max-w-445 max-730:max-w-max'>
                            <h3 className="text-primary-light_coral mb-4 max-370:mb-2">Easy to Implement</h3>
                            <p className="small-p opacity-8">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </li>
                    <li className="flex items-start max-370:flex-col max-370:text-center max-370:items-center">
                        <img width={72} height={72} src={statisticsImg} alt="statistics icon" className="mr-6 max-370:mr-0 max-370:mb-4" />
                        <div className='max-w-445 max-730:max-w-max'>
                            <h3 className="text-primary-light_coral mb-4 max-370:mb-2">Enhanced Productivity</h3>
                            <p className="small-p opacity-8">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <img width={100} height={244} className='absolute right-0 bottom-0 object-cover object-left z-1 max-730:top-0' src={shapeImg} alt="" aria-hidden='true' />
        </section>
    )
}

export default IndexMainTopSection