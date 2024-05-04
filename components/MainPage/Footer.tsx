import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from 'C:/Users/Q1/Desktop/sikayetvar/img/FooterLogo.png'


function Footer() {
    return (
        <footer className='footerlayout w-full pt-20'>
            <div className='footer w-full flex text-white justify-between leading-9 '>
                <div className='footerulli flex justify-between ml-32'>
                    <div>
                        <h4 className='text-xl font-normal'>Şikayətlər</h4>
                        <ul>
                            <li>Akldmlksamdlm</li>
                            <li>Akldm lkm</li>
                            <li>Ak samdlm</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-normal'>Markalar</h4>
                        <ul>
                            <li>Akldmlksamdlm</li>
                            <li>Akldm lkm</li>
                            <li>Ak samdlm</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-normal'>Kateqoriyalar</h4>
                        <ul>
                            <li>Akldmlksamdlm</li>
                            <li>Akldm lkm</li>
                            <li>Ak samdlm</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex text-xl mr-32' >
                        <a href="#" >Follow</a>
                        <a href="#" className='ml-3'>ŞikayətVar</a>
                    </div>
                    <div className='icons flex justify-between w-40 mt-6'>
                        <FontAwesomeIcon icon={faInstagram} className='footericon' />
                        <FontAwesomeIcon icon={faFacebook} className='footericon' />
                        <FontAwesomeIcon icon={faTwitter} className='footericon' />
                    </div>
                </div>
            </div>
            <div className='Logo w-52 ml-28 '>
            <img src={FooterLogo.src} alt="" />
            <p className='ml-4 text-white'>ŞikayətVar, Inc. — ©2024 </p>
            </div>
        </footer>
    )
}

export default Footer
