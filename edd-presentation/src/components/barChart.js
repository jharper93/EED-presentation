import React from 'react'
import {
    ComposedChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export const BarGraph = ({level}) => {

    const data = [
        {
          name: 'Water level',  pv: level 
        },
      ];
      

    return (
        <ResponsiveContainer>
          <ComposedChart
        layout="vertical"
        width={500}
        height={100}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" domain={[0, 100]}/>
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={40} fill="#413ea0" />
      </ComposedChart>
      </ResponsiveContainer>
    )
}