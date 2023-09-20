import React, { useState } from 'react';
import { directorsInfo } from '../assets/data';
import plusIcon from '../assets/images/plus-icon.svg';
import circleShape from '../assets/images/circle-shape2.svg';
import squareShape from '../assets/images/square-shape.svg';

const AboutPageDirectorsInfo = () => {
    const [directorStates, setDirectorStates] = useState(directorsInfo.map(() => false));

    const toggleDirectorState = (index) => {
        const newDirectorStates = [...directorStates];
        newDirectorStates[index] = !newDirectorStates[index];
        setDirectorStates(newDirectorStates);
    };

    return (
        <section className='py-140 bg-secondary-deep_jungle_green relative max-730:py-100'>
            <img width={200} height={200} className='absolute -left-100 top-0 max-730:h-100 object-cover max-730:object-bottom' src={circleShape} alt="circle shape" />
            {/* main content  */}
            <div className="container">
                <h2 className="text-center max-w-917 mx-auto mb-16 max-940:mb-14 max-730:mb-12">Meet the directors</h2>
                <ul className="grid grid-cols-3 gap-30px gap-y-12 max-800:gap-5 max-730:grid-cols-2 max-730:gap-2.5 max-730:max-w-573 max-730:mx-auto max-540:grid-cols-1 max-540:gap-6">
                    {
                        directorsInfo.map((e, index) => {
                            return (
                                <li key={e.id} className='flex flex-col items-center relative bg-secondary-sacramento_state_green pt-8 pb-56px mb-7 text-center'>
                                    <img width={96} height={96} src={e.img} alt={`${e.name} profile image`} className="mb-4 rounded-full border-2 border-secondary-rapture_blue" />
                                    <h3 className="text-secondary-rapture_blue">{e.name}</h3>
                                    <p className="italic small-p font-[500!important]">{e.job}</p>
                                    <button onClick={() => toggleDirectorState(index)} className={`flex absolute items-center justify-center -bottom-7 rounded-full bg-primary-light_coral w-56 h-56 z-1 transition-colors transition-transform-opacity plus-btn hover:bg-secondary-rapture_blue ${directorStates[index] ? 'plus-btn_active' : ''}`}>
                                        <img width={16} height={16} src={plusIcon} alt="plus icon" />
                                    </button>
                                    {/* about  */}
                                    <div className={`${directorStates[index] ? 'flex' : 'hidden'} absolute bg-secondary-sacramento_state_green top-0 right-0 left-0 bottom-0 flex-col py-9 px-12 w-full h-full items-center directors-card max-1050:px-10 max-1050:py-7 max-940:px-5 max-800:px-3 max-730:px-6 max-730:pt-9 max-730:pb-12 max-540:px-56px max-370:px-10`}>
                                        <h3 className="text-secondary-rapture_blue mb-2">{e.name}</h3>
                                        <p className="max-w-254 mb-6 small-p max-940:mb-4 max-800:mb-3 max-540:max-w-max max-540:mb-6">{e.description}</p>
                                        <ul className="flex items-center space-x-4">
                                            <li>
                                                <a href={e.twitter} target='_blank'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='text-white hover:text-primary-light_coral transition-colors' width="20" height="24" viewBox="0 0 24 20" fill="none">
                                                        <path d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={e.linkedin} target='_blank'>
                                                    <svg className='text-white hover:text-primary-light_coral transition-colors' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="icon-linkedin">
                                                            <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0ZM6 17V8H3V17H6ZM4.5 6.3C3.5 6.3 2.7 5.5 2.7 4.5C2.7 3.5 3.5 2.7 4.5 2.7C5.5 2.7 6.3 3.5 6.3 4.5C6.3 5.5 5.5 6.3 4.5 6.3ZM14 17H17V11.3C17 9.4 15.4 7.8 13.5 7.8C12.6 7.8 11.5 8.4 11 9.2V8H8V17H11V11.7C11 10.9 11.7 10.2 12.5 10.2C13.3 10.2 14 10.9 14 11.7V17Z" fill="currentColor" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* square shape */}
            <img width={147} height={200} className='absolute right-0 bottom-0' src={squareShape} alt="square shape" />
        </section>
    )
}

export default AboutPageDirectorsInfo