import React from 'react'



import './Home.css'
import LineChart from '../../components/LineChart/LineChart'
import OverviewChart from '../../components/OverviewChart/OverviewChart'




const Home = () => {
  return (
    <div>
      <div className='home-text'>
      <span>
        <h3>Overview</h3>
      </span>

      <span>
      <h5> of the next products</h5>
      </span>
       
      </div>

      <div>
        <OverviewChart/>
      </div>

     
      
    </div>
  )
}

export default Home