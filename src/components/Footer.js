import React from 'react'
import facebook from "../Images/icon-facebook.svg";
import twitter from "../Images/icon-twitter.svg";
import logo from "../Images/logo-bookmark-light.svg";

export default function Footer() {
  return <>
    <footer style={{
      backgroundColor: "hsl(229, 31%, 21%)",
    }}
      className='py-10 px-8'
    >
      <div className='max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:justyfy-between'>
        <div className='md:flex md:items-center md:gap-6 lg:gap-10'>
          <img src={logo} alt="" className="white-logo"/>

          <ul className='mt-6 md:mt-0 md:flex md:gap-6 lg:gap-10'>
            <li>
              <button className='text-white uppercase text-sm tracking-wide'>
                Features
              </button>
              </li>
            <li className='my-4 md:my-0'>
              <button className='text-white uppercase text-sm tracking-wide'>
                Pricing
              </button>
              </li>
            <li>
              <button className='text-white uppercase text-sm tracking-wide'>
                Contact
              </button>
              </li>
          </ul>
        </div>

        <ul className='flex items-center gap-4 lg:gap-10'>
          <li>
            <button>
              <img src={facebook} alt='' />
            </button>
          </li>
          <li>
            <button>
              <img src={twitter} alt='' />
            </button>
          </li>
        </ul>
        </div>

        <div className='mt-10'>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://peter-godspower.netlify.app/" rel='noreferrer' target='_blank'>Peter God'spower</a>.
          </p>
        </div>
    </footer>
  </>
}
