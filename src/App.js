import React from 'react';
import data from './data.json';
import LineChartExample from './components/LineChartExample'
import PieChartExample from './components/PieChartExample'
import ComposedChartExample from './components/ComposedChartExample'

function App() {
  return (
    <div className="App">
      <h1>Recharts Demo</h1>

      <LineChartExample data={data} />

      <hr /> 

      <PieChartExample data={data} />

      <hr /> 
      
      <ComposedChartExample data={data} />
    </div>
  );
}

export default App;
