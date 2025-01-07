import Link from 'next/link'

export default function AdminHome() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Admin Dashboard</h1>
          <p className="py-6">Welcome to the admin dashboard. Choose a section to manage your application.</p>
          <div className="flex flex-col gap-4">
            <Link href="/admin/create-user" className="btn btn-primary">Create User</Link>
            <Link href="/admin/user-list" className="btn btn-info">View list of users</Link>
            <Link href="/admin/weekly-results" className="btn btn-secondary">Weekly Results</Link>
            <Link href="/admin/assign-tasks" className="btn btn-accent">Assign Tasks</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

