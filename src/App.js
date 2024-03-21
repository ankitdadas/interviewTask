
import './App.css';
import Card from './card';

function App() {
  return (
    <div className="App">
    <Card title="Sub-Category" desc="The assets are distributed between equity and cash & equivalents. " type="bar"/>
    <Card title="Fund Distribution" type="pie"  desc="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."/>
    <Card title="Top Sectors" desc="The assets are distributed between equity and cash & equivalents." type="hages"/>
    </div>
  );
}

export default App;
