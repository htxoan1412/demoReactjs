import React,{useEffect} from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuiddv4 } from "uuid";

const From = ({ input, setInput, jobs, setJobs}) => {
  
    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
    
            setJobs([...jobs, {
                id: uuiddv4(),
                title: input,
            }])
            setInput('');
    };

    return (
        <form onSubmit={onFormSubmit}>

            <input type="text" placeholder="Enter a Task" className="task-input"
                type="text"
                placeholder="Enter a Task"
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )

}
export default From