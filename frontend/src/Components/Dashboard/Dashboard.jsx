import React from 'react'
import Sidebar from '../Dashboard/Components/Sidebar_Section/Sidebar'
import Body from '../Dashboard/Components/Body_Section/Body';

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
        <div className="dashboardContainer flex">
          dashboard
            <Sidebar/>
            <Body/>
        </div>
    </div>
  )
}

export default Dashboard