import React from 'react'
import HomeRow_1 from '../organisms/home/HomeRow_1'
import HomeRow_2 from '../organisms/home/HomeRow_2'
import HomeRow_3 from '../organisms/home/HomeRow_3'

const HomePage = () => {
  return (
    <div>
      <div className='home'>
        < div className='home-container'>
          <HomeRow_1 />
          <HomeRow_2 />
          <HomeRow_3/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
