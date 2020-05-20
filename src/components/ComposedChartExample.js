import React from 'react'
import colorArray from '../colors'

import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts'

export default function ComposedChartExample(props) {
  return (
    <div>
      <h2>Composed Chart</h2>
      <h3>Newly Infected vs. Newly Recovered in Spain</h3>
      <ResponsiveContainer width="80%" height={500}>
        <ComposedChart data={props.data.newCasesVsNewRecoveriesInSpain} margin={{bottom: 50}}>
          <Bar dataKey="cases" barSize={5} fill={colorArray[20]} />
          <Line type="monotone" dataKey="recoveries" strokeWidth={5} stroke={colorArray[21]} />
          <XAxis dataKey="date" />
          <YAxis />
          <Legend />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
