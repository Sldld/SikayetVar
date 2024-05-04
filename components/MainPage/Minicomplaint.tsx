import React from 'react'
import complaintcomponenteye from 'C:/Users/Q1/Desktop/sikayetvar/img/complaintcomponenteye.png'
import comment from 'C:/Users/Q1/Desktop/sikayetvar/img/comment.png'
function Minicomplaint() {
    return (
        <div className='complaintcomponentdimension '>
            <div className='flex w-full items-center'>
                <div className='flex ml-3 mt-3'>
            <div className='profilephoto'>
                <img src="" alt="" />
            </div>
            <div className='ml-3 mt-1'>
            <p className=''>Name</p>
            <div className='complaintcomponenteyediv flex justify-between'>
            <img className='complaintcomponenteye' src={complaintcomponenteye.src} alt="" />
            <p className='complaintcomponentreviewcounter'>1.674</p>
            </div>
            </div>
            </div>
            <div className='commenticonword flex ml-56'>
            <img className='complaintcomponenteye' src={comment.src} alt="" />
            <span className='comment ml-1'><p>25</p> Yorum</span>
            </div>
            </div>
            
            <p className='commentword ml-4 mt-3'>Lorem Ipsum is simply dummy text of the prin</p>
        </div>
    )
}

export default Minicomplaint
