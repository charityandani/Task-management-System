import React from "react";
import { BarChart, Bar,LineChart, Line, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default  function DashboardContect()
{


    
const data = [
    {
      name: 'Week 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'week 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'week 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'week 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    
   
  ]; 
    return(
        <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MEMBERS</h3>
                    
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PROJECTS</h3>
                   
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLETED PROJECTS</h3>
                    
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TASKS</h3>
                  
                </div>
                <h1>42</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>PENDING TASKS</h3>
                  
                </div>
                <h1>42</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLETED TASKS</h3>
                  
                </div>
                <h1>42</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                  
                </div>
                <h1>42</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                  
                </div>
                <h1>42</h1>
            </div>

        </div>

    
    <div className="charts">

    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>


      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>

</main>



    );
}