import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// function App() {
//   const [myDate, myDateUpdate] = useState(new Date());
//   useEffect(() =>  {
//     const intervalId = setInterval(() => {
//       myDateUpdate(new Date())
//     }, 1000);
//     return () => clearInterval(intervalId);
//   });
//   return (
//       <div>
//           <h3>Example React</h3>
//           <input />
//           <div>{myDate.toString()}</div>
//       </div>
//   );
// }
function App() {
  const [myDate, myDateUpdate] = useState(new Date());
  const[isRunning, setIsRunning] = useState(true);

  useEffect(() =>  {
    if(!isRunning) return;

    const intervalId = setInterval(() => {
      myDateUpdate(new Date())
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
      <div>
          <h3>Example React</h3>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop': 'Start'}
          </button>
          <div>{myDate.toString()}</div>
      </div>
  );
}
export default App;
