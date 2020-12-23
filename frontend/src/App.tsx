import React from 'react';
import './App.css';
import {useEvent} from "./fetchHooks";


function App() {

    const {event, isLoading, isError} = useEvent("2")

    if (isError) return <div>failed to load {isError.toString()}</div>
    if (isLoading) return <div>loading...</div>

    console.log(event)

  return (
    <div className="App">
      <header className="App-header">
       <h1>Hei</h1>
          <p>{event?.title}</p>
      </header>
    </div>
  );
}

export default App;
