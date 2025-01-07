import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link href="/admin" className="btn btn-ghost normal-case text-xl">Admin Dashboard</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/admin/create-user">Create User</Link></li>
          <li><Link href="/admin/weekly-results">Weekly Results</Link></li>
          <li><Link href="/admin/assign-tasks">Assign Tasks</Link></li>
        </ul>
      </div>
    </div>
  )
}

