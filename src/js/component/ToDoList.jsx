import React, { useState } from "react";

export const ToDoList = () => {

    const [task, setTasks] = useState('')
    const [todos, setTodos] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== '') {
            setTodos([...todos, task])
          }
          setTasks('')
    }

    const randomTasks = [
        "Skidiving",
        "Go and kiss your crush",
        "Get drunk",
        "Book a random flight",
        "Running a marathon",
        "Wildlife safari in Africa",
        "Crossing the street blindfolded",
        "Running with the bulls in Pamplona",
        "Hitchhiking through war zones",
        "Skip class",
        
    ];

    const getRandomTask = () => {
        setTodos([...todos, randomTasks[Math.floor(Math.random() * randomTasks.length)]]);
    }

    const handleTasks = (event) => {
        setTasks(event.target.value)
    }

    const handleDelete = (item) => {
        setTodos(todos.filter((element) => element !== item ))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1 className="text-success mt-4">TO DO LIST</h1>
                    <input type="text" className="form-control" placeholder="Add your task here"
                        value={task}
                        onChange={handleTasks} />

                    <ul className="list-group mt-4">
                        {todos.map((item, index) =>
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center hidden-icon">
                                {item}
                                <span onClick={() => handleDelete(item)}><i className="fas fa-trash"></i></span>
                            </li>
                        )}
                        <li className="list-group-item text-end">{todos.length} tasks</li>
                    </ul>

                    <div className="text-secondary mt-3">Hope you can make it.</div>
                </div>
                <button type="button" className="btn btn-primary mt-2" onClick={getRandomTask}>Go crazy</button>
            </form >
        </div >
    )
}



