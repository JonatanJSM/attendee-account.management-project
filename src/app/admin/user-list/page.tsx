'use client'

import { useState } from 'react'

interface User {
  id: number
  username: string
  email: string
  role: string
}

export default function CreateUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'user'
  })

  const [users, setUsers] = useState<User[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Add the new user to the list
    const newUser: User = {
      id: users.length + 1,
      ...formData
    }
    setUsers(prevUsers => [...prevUsers, newUser])
    // Reset form after submission
    setFormData({ username: '', email: '', role: 'user' })
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="card bg-base-100 shadow-xl flex-1">
        <div className="card-body">
          <h2 className="card-title">Create New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="select select-bordered"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Create User</button>
            </div>
          </form>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl flex-1">
        <div className="card-body">
          <h2 className="card-title">Created Users</h2>
          {users.length === 0 ? (
            <p>No users created yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
