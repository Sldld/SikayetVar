import React from 'react';
import 'C:/Users/Q1/Desktop/sikayetvar/styles/globals.css';
import img1 from 'C:/Users/Q1/Desktop/sikayetvar/img/image.png'
import img2 from 'C:/Users/Q1/Desktop/sikayetvar/img/image2.png'
function Section1() {
  return (
    <div className="w-full h-screen bg-pink  items-center flex justify-around p-10">
<div className=' h-60 text-center font-bold flex' style={{width:"500px"}}>
        <div>
        <div>
          <h1 className='text-white text-3xl tracking-wide'>Şikayətin var ?</h1>
          <h1 className='text-white text-2xl mt-2 tracking-wide'>O zaman doğru ünvandasan</h1>
        </div>
        <div className="max-w-sm relative mt-10">
          <input type="text" className="py-3 px-10 w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Marka, şikayət, məhsul axtar" />
          <svg className="absolute top-1/2 transform -translate-y-1/2 right-3 w-5 h-5 text-black	" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        </div>
      <div className='w-20 h-10 bg-pink-600 mt-10 ml-10'>
          <img src={img2.src} alt="" />
        </div>
      </div>
      <div className='picture w-96 h-60 mb-40'>
        <img className='w-100' src={img1.src} alt="" />
      </div>
    </div>
  );
}

export default Section1;