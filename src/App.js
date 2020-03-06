import React, { useState } from 'react';
import './App.css';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';

function App() {
  const [circles, setCircles] = useState(['1', '2', '3', '4']);
  const [selectedCircle, selectCircle] = useState('');
    return(
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <>
          <CircleSelector 
            circles={circles}
            selectedCircle={selectedCircle}
            setSelectedCircle={selectCircle}
        />
          <Circles 
            selectedCircle={selectedCircle} 
            circles={circles}
          />
        </>
      </div>
    );
  };


export default App;


// function App() {
//   const [circles, setCircles] = useState(["1", "2", "3", "4"]);
//   const [selectedCircle, setSelectedCircle] = useState("");

//   return (
//     <div className="App">
//       <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
//       <main>
//         <CircleSelector
//           circles={circles}
//           selectedCircle={selectedCircle}
//           setSelectedCircle={setSelectedCircle}
//         />
//         <Circles selectedCircle={selectedCircle} circles={circles} />
//       </main>
//     </div>
//   );
// }

// export default App;
