"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Menu, Bell, User } from 'lucide-react'
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export default function Header() {
  
  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // Redirige a la página de login
        },
      },
    });
  };
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
          <Menu className="w-6 h-6" />
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">My Dashboard</span>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <Bell className="w-5 h-5" />
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/placeholder.svg?height=40&width=40" alt="User avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li>
            <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

