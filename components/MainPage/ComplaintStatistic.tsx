import React from 'react';
import Statisticcomponent from './Statisticcomponent';

import statisticusericon from 'C:/Users/Q1/Desktop/sikayetvar/img/StatiscticUsericon.png';
import statisticmenuicon from 'C:/Users/Q1/Desktop/sikayetvar/img/StaatisticMenuicon.png';
import statisticeyeicon from 'C:/Users/Q1/Desktop/sikayetvar/img/statisticeyeicon.png';

function ComplaintStatistic() {
  return (
    <div className='w-full' style={{ height: "580px" }}>
      <h1 className='text-gray text-3xl font-bold ml-32 pt-20'>Şikayət Statistikası</h1>
      <div className='flex w-2/3 justify-between m-auto mt-10'>
        <Statisticcomponent
          componentsicon={statisticusericon.src}
          componentscat='Üzv Sayısı'
          catcounter={100.678}
          maxWidth={66.84} 
          height={74} 
        />
        <Statisticcomponent
          componentsicon={statisticmenuicon.src}
          componentscat='Həll Olan Şikayət'
          catcounter={56.768}
          maxWidth={64.04} 
          height={74} 
        />
        <Statisticcomponent
          componentsicon={statisticeyeicon.src}
          componentscat='Son 30 gün ziyarətçi'
          catcounter={25.353}
          maxWidth={95} 
          height={74} 
        />
      </div>
    </div>
  );
}

export default ComplaintStatistic;
