import axios from 'axios'
import React from 'react'
import StartupCard, { StartupTypeCard } from './StartupCard'

const UserStartups = async ({id}: {id: string}) => {
    const response = await axios.get(`https://launchpadbe.vercel.app/api/startups-by-author/${id}`)
    const startups = response.data.startups;

  return <>
    {startups.length > 0 ? startups.map((startup: StartupTypeCard) => (
        <StartupCard key={startup._id} post = {startup}/>
    )): <p className='no-result'>No posts yet</p>}
  </>
}

export default UserStartups