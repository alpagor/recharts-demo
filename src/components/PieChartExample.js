import React from 'react'
import colorArray from '../colors'

import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

export default function PieChartExample(props) {
  return (
    <div>
      <h2>Pie Chart</h2>
      <h3>Covid cases distributed by country</h3>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{bottom: 50}}>
          <Pie data={props.data.distributionWorlwide} dataKey="cases" nameKey="country" label>
          {
            props.data.distributionWorlwide.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorArray[index]}/>
            ))
          }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
