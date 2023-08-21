import React,{useState} from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [times,settime] = useState(time);

  function st(){
    const newt =  new Date().toLocaleTimeString();
    settime(newt);
  }
 
  setInterval(st, 1000);
  return (
    <div className="container">
      <h1>{times}</h1>
      <button onClick={st}>Get Time</button>
    </div>
  ); 
}

export default App;
