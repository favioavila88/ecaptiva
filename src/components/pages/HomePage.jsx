import React from 'react'
import HomeRow_1 from '../organisms/home/HomeRow_1'
import HomeRow_2 from '../organisms/home/HomeRow_2'
import HomeRow_3 from '../organisms/home/HomeRow_3'
import HomeRow_6 from '../organisms/home/HomeRow_6'
import HomeRow_7 from '../organisms/home/HomeRow_7'
import HomeRow_8 from '../organisms/home/HomeRow_8'

const HomePage = () => {
  return (
    <div>
      <div className='home'>
        < div className='home-container'>
          <HomeRow_1 />
          <HomeRow_2 />
          <HomeRow_3 />
          <HomeRow_6 />
          <HomeRow_7 />
          <HomeRow_8 />
        </div>
      </div>
    </div>
  )
}

export default HomePage
