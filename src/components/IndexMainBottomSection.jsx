import React from 'react';
import { homePageAboutPeople } from '../assets/data';
import quoteIcon from '../assets/images/quote-icon.svg';
import squareShape from '../assets/images/square-shape.svg';
import circleShape from '../assets/images/circle-shape2.svg';

const IndexMainBottomSection = () => {
    return (
        <section className='py-140 relative'>
            <div className="container max-730:max-w-573">
                <img width={147} height={100} className='absolute top-0 left-0' src={squareShape} alt="square shape" />
                <h2 className="max-w-932 text-center mb-56px mx-auto">Delivering real results for top companies. Some of our <span className='text-secondary-rapture_blue'>success stories.</span></h2>
                <ul className="grid grid-cols-3 gap-30px max-940:gap-5 max-730:gap-12 max-730:grid-cols-1 max-730:max-w-580">
                    {
                        homePageAboutPeople.map((e) => {
                            return (
                                <li key={e.id} className="flex flex-col justify-between items-center text-center mt-9 relative">
                                    <img width={67} height={56} className='absolute -top-9 z-0' src={quoteIcon} alt="quote icon" />
                                    <p className="small-p mb-6 z-1 max-730:mb-4">{e.description}</p>
                                    <h3 className="mb-0.5 text-secondary-rapture_blue">{e.name}</h3>
                                    <span className="italic text-13 font-medium leading-18 mb-8 max-730:mb-4">{e.job}</span>
                                    <img width={62} height={62} className='rounded-full border-2 border-secondary-rapture_blue' src={e.img} alt={`${e.name} image`} />
                                </li>
                            )
                        })
                    }
                </ul>
                <img width={200} height={100} className='absolute bottom-0 right-0 h-100 object-cover object-top' src={circleShape} alt="circle shape" />
            </div>
        </section>
    )
}

export default IndexMainBottomSection