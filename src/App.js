import React, { useState } from 'react';
// import Header from './components/Header';
import Form from './component/From';
import TodoList from './component/TodoList';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [jobs, setJobs] = useState([]);

  return (
    <div className="container">

      <div className="app-wrapper">
        <div>
          <Form
            input={input}
            setInput={setInput}
            jobs={jobs}
            setJobs={setJobs}
          />
        </div>
        <div>
          <TodoList jobs={jobs} setJobs={setJobs}  />
        </div>
      </div>
    </div>
  );
}

export default App;
