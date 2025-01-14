import React from 'react'
import Ping from './Ping'
import axios from 'axios';
import { formatNumber } from '@/lib/utils';
import { after } from 'next/server'

const View = async ({id}: {id: string}) => {

  const response = await axios.get(`https://launchpad-be-z59x.onrender.com/api/get-views/${id}`);
  const viewCount = response.data.views;
  // console.log(viewCount);

  after(async () => {
    // console.log('View component has been rendered');
    await axios.post(`https://launchpad-be-z59x.onrender.com/api/increment-views/${id}`);
  })

  return <div className='view-container'>
    <div className='absolute -top-2 -right-2'><Ping/></div>
    <p className='view-text'>
        <span className='font-black'>{formatNumber(viewCount)} views</span>
    </p>
  </div>
}

export default View