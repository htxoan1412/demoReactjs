const TodoList = ({ jobs, setJobs,handleEditChange }) => {
    const removeJobs = ({ id }) => {
        console.log(id);
        setJobs(jobs.filter((job) => job.id !== id));

    };
    return (
        <div>
            {
                jobs.map((job) => (
                    <li className="list-item" key={job.id}>

                        <input
                            type="text"
                            value={job.title} className="list"
                            className="list"
                            onChange={(e) => e.preventDefault()}
                        />
                        <button className="button-complete task-button">
                            <i className="fas fa-check"></i>
                        </button>
                        <button className="button-edit task-button"onClick={() => handleEditChange(job.id)}  >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => removeJobs(job)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                )

                )}

        </div>
    );
}

export default TodoList