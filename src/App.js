import './App.css';
import Listing from './components/Listing/Listing';
import dataJson from './eatsy.json'

function App() {
  const data = dataJson;

  return (
    <>
      <Listing items={data}/>
    </>
  );
}

export default App;
