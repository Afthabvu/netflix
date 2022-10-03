import React from 'react'
import Banner from '../banner/Banner'
import Nav from '../Nav/Nav'
import "./HomeScreen.css"

function HomeScreen() {
  return (
    <div className='homeScreen'>
       <Nav />
        <Banner/>
        {/* rows */}
    </div>
  )
}

export default HomeScreen