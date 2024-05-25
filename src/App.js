import './App.css';
import Hello from './FunctionBasedComp/Hello';
import Hello2 from './FunctionBasedComp/Hello2';

function App() {
  return (
    <div className="App">
      
      <Hello2></Hello2>
      <Hello></Hello>
      <h1>Welcome to the learning page of React js</h1>
      <h1 className='shiva'>I am shivam singh Present</h1>
      <h1>I am RAVI RAJ Present</h1>
      <h1>I am shivam singh Present</h1>
      <h1 className='ravi' >I am RAVI RAJ Present</h1>
      <h1 className='saurabhName'>i am Saurabh kumar pesent</h1>
      <h1  className='pritam'>I am pritam kumar present</h1>
      <h1>I am Raushan Kumar present</h1>
    </div>
  );
}

export default App;
