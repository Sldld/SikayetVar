import React from 'react';

interface StatisticProps {
  componentsicon: string;
  componentscat: string;
  catcounter: number;
  maxWidth: number;
  height: number; 
}

function Statisticcomponent(props: StatisticProps) {
  return (
    <>
      <div className='statisticcomponent bg-violent rounded-3xl pt-12 pl-6'>
        <div className='statisticicondiv'>
          <img
          className='ml-3'
            src={props.componentsicon}
            alt=""
            style={{ width: props.maxWidth, height: props.height }}
          />
        </div>
        <h4 className='text-gray mt-3 text-lg'>{props.componentscat}</h4>
        <h3 className='text-3xl mt-4'>{props.catcounter}</h3>
      </div>
    </>
  );
}

export default Statisticcomponent;
