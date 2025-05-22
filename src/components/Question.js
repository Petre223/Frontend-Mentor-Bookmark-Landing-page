import React, {useState} from 'react'
import arrow from '../Images/icon-arrow.svg' 
import arrowRed from '../Images/icon-arrow-red.svg'

export default function Question({question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false);

  return <>
    <article className='py-3 border-t border-slate-300 last:border-b last:border-slate-300'>
        <div onClick={() => setShowAnswer(!showAnswer)}
         className='flex items-center justify-between cursor-pointer'>
            <h2 className='font-normal text-lg hover:text-red-400'>{question}</h2>
            <button>
                {showAnswer ? <img src={arrowRed} alt='' style={{ 
                    filter: 'brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(100%)' 
                }}  className='transform rotate-180' /> : <img src={arrow} alt='' />}
            </button>
        </div>
        {showAnswer && <p>{answer}</p>}
    </article>
  </>
}
