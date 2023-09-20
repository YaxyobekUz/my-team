import React from 'react';
import boyImg from '../assets/images/boy-icon.svg';
import parameterImg from '../assets/images/parameter-icon.svg';
import statisticsImg from '../assets/images/statistics-icon.svg';

const ContactPageMainContent = () => {
  return (
    <div className="py-120 relative max-730:py-28 max-370:py-84">
      <div className="grid container grid-cols-2 gap-30px max-730:grid-cols-1 max-730:gap-16 max-370:gap-56px">
        <div className='flex flex-col max-730:items-center max-730:max-w-515 max-730:mx-auto'>
          <h1 className="text-64 mb-4 max-730:mb-6 max-370:mb-4 small-h1">Contact</h1>
          <p className="leading-48 text-32 text-primary-light_coral mb-8 max-730:mb-6 max-370:mb-10">Ask us about</p>
          <ul className="space-y-2 max-370:space-y-6">
            <li className="flex items-center">
              <img width={72} height={72} src={boyImg} alt="boy icon" className="mr-6" />
              <h3 className="font-bold">The quality of our talent network</h3>
            </li>
            <li className="flex items-center">
              <img width={72} height={72} src={parameterImg} alt="parameter icon" className="mr-6" />
              <h3 className="font-bold">Usage & implementation of our software</h3>
            </li>
            <li className="flex items-center">
              <img width={72} height={72} src={statisticsImg} alt="statistics icon" className="mr-6" />
              <h3 className="font-bold">How we help drive innovation</h3>
            </li>
          </ul>
        </div>
        {/* form  */}
        <form action="https://echo.htmlacademy.ru" className='flex flex-col max-730:max-w-540 max-730:mx-auto max-730:w-full'>
          <input type="text" placeholder='Name' name='name' autoComplete='off' className='light-input_sytles pt-0' required />
          <input type="email" placeholder='Email' name='email' autoComplete='off' className='light-input_sytles email-input' required />
          <span className="warning italic text-10 font-bold leading-normal ml-3 text-primary-light_coral mt-2">This field is required</span>
          <input type="text" placeholder='Company Name' name='company name' autoComplete='off' className='light-input_sytles company-name-input' required />
          <input type="text" placeholder='Title' name='title' autoComplete='off' className='light-input_sytles' required />
          <textarea name="message" className='light-input_sytles pb-14 mb-6 resize-none' placeholder='Message' required></textarea>
          <button className='secondary-btn_light max-w-max text-secondary-deep_jungle_green'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPageMainContent