import Tooltip from './Tooltip';

function App() {
  return (
    <div className='container'>
      <h1>Simple Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
