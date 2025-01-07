import Link from 'next/link'
import { Home, BarChart2, Users, Settings } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Users, label: 'Customers', href: '/dashboard/customers' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
      <aside className="bg-base-200 w-80 min-h-screen">
        <div className="flex items-center p-4 border-b border-base-300">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul className="menu p-4 w-full">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center p-2 space-x-3 rounded-md">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

