import React from 'react'
import colorArray from '../colors'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function LineChartExample(props) {
  return (
    <div>
      <h2>Line Chart</h2>
      <h3>E-commerce orders in % (YoY)</h3>
      <ResponsiveContainer width="80%" height={500}>
        <LineChart data={props.data.eCommerceOrders} margin={{bottom: 50}}>
          <Line type="monotone" dataKey="spain" stroke={colorArray[1]} strokeWidth={5} />
          <Line type="monotone" dataKey="france" stroke={colorArray[5]} strokeWidth={5}   />
          <Line type="monotone" dataKey="finland" stroke={colorArray[8]} strokeWidth={5}   />
          <Line type="monotone" dataKey="serbia" stroke={colorArray[11]} strokeWidth={5}   />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => value+"%"} />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
