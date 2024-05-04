import React from 'react'
import categorybank from 'C:/Users/Q1/Desktop/sikayetvar/img/categorybank.png'
import categorycomputer from 'C:/Users/Q1/Desktop/sikayetvar/img/categorycomputer.png'
import categorymedicine from 'C:/Users/Q1/Desktop/sikayetvar/img/categorymedicine.png'
import categorydelivery from 'C:/Users/Q1/Desktop/sikayetvar/img/categorydelivery.png'
import categorymarket from 'C:/Users/Q1/Desktop/sikayetvar/img/categorymarket.png'
import categoryfood from 'C:/Users/Q1/Desktop/sikayetvar/img/categroyfood.png'
import mobileoperator from 'C:/Users/Q1/Desktop/sikayetvar/img/mobileoperator.png'
import categorytaxi from 'C:/Users/Q1/Desktop/sikayetvar/img/categorytaxi.png'

function Categories() {
  return (
    <div className='w-full h-64 '>
      <h1 className=' text-gray text-3xl font-bold ml-32 pt-10'>Kateqoriyalar</h1>

      <div className='categories w-3/4 h-20  mt-6 flex items-center m-auto'>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorybank.src} alt="" />
            <span className='mt-2'>Bank</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorycomputer.src} alt="" />
            <span className='mt-2'>Electronics</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorymedicine.src} alt="" />
            <span className='mt-2'>Medicine</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorydelivery.src} alt="" />
            <span className='mt-2'>Delivery</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorymarket.src} alt="" />
            <span className='mt-2'>Market</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categoryfood.src} alt="" />
            <span className='mt-2'>Food</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={mobileoperator.src} alt="" />
            <span className='mt-2'>Mobile Operators</span>
        </div>
        <div className='categorybank text-center justify-center'>
            <img className='categorybankicon m-auto' src={categorytaxi.src} alt="" />
            <span className='mt-2'>Taxi</span>
        </div>
      </div>
    </div>
  )
}

export default Categories
