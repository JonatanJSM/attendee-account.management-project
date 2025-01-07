'use client'

import { useState } from 'react'

export default function AssignTasks() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignee: '',
    dueDate: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the task data to your backend
    console.log('Task assigned:', task)
    // Reset form after submission
    setTask({ title: '', description: '', assignee: '', dueDate: '' })
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Assign Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Assignee</span>
            </label>
            <select
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
              className="select select-bordered"
              required
            >
              <option value="">Select Assignee</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Date</span>
            </label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Assign Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}
