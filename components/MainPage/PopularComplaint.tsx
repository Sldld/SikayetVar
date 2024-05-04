import React from 'react';
import 'C:/Users/Q1/Desktop/sikayetvar/styles/globals.css';
import Minicomplaint from '@components/MainPage/Minicomplaint';

function PopularComplaint() {
  const itemStyle = {
    margin: '10px 10px'
  };

  return (
    <div className='w-full h-svh'>
      <h1 className='text-gray text-3xl font-bold ml-32 pt-20'>Məhşur Şikayətlər</h1>
      <div className='carousel-wrapper overflow-hidden mt-24'>

        <div className='carousel-row'>
          <div className='carousel-inner flex relative'>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
          </div>
        </div>

        <div className='carousel-row ' >
          <div className='carousel-inner flex relative'>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
            <div style={itemStyle}><Minicomplaint /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularComplaint;
