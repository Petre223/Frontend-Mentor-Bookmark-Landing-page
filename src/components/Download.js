import React from 'react'
import chrome from '../Images/logo-chrome.svg';
import firefox from '../Images/logo-firefox.svg';
import opera from '../Images/logo-opera.svg';
import dots from '../Images/bg-dots.svg';

export default function Download() {
  return <>
    <section className='max-w-7xl mx-auto px-8 py-20'>
        <acticle className='text-center mb-10'>
            <h2 className='text-3xl mb-8 lg:text-4xl'>Download the extension</h2>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
        </acticle>

        <acticle className='grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white rounded shadow-2xl text-center p-8'>
              <img src={chrome} alt=""  className='block mx-auto mb-4'/>
              <h3 className='text-xl mb-4'>Add to Chrome</h3>
              <p className='text-sm'>Minimum version 62</p>
              <img src={dots} alt="" className='block mx-auto my-4'/>
              <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-55'>Add & Install Extension</button>  
            </div>

            <div className='bg-white rounded shadow-2xl text-center p-8 lg:transform lg:translate-y-10'>
              <img src={firefox} alt=""  className='block mx-auto mb-4'/>
              <h3 className='text-xl mb-4'>Add to Firefox</h3>
              <p className='text-sm'>Minimum version 55</p>
              <img src={dots} alt="" className='block mx-auto my-4'/>
              <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-55'>Add & Install Extension</button>  
            </div>

            <div className='bg-white rounded shadow-2xl text-center p-8 lg:transform lg:translate-y-20'>
              <img src={opera} alt=""  className='block mx-auto mb-4'/>
              <h3 className='text-xl mb-4'>Add to Opera</h3>
              <p className='text-sm'>Minimum version 46</p>
              <img src={dots} alt="" className='block mx-auto my-4'/>
              <button className='btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-55'>Add & Install Extension</button>  
            </div>

        </acticle>
    </section>
  </>
}
