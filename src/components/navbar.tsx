'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="h-16 border-b-2 flex justify-between items-center sm:px-12">
      <h1 className="font-extrabold tracking-tighter text-2xl bg-clip-text text-transparent bg-gradient-to-r from-black to-black/60">
        {pathname === '/' ? (
          <span>Smart Waste Management System</span>
        ) : (
          <Link href="/">Smart Waste Management System</Link>
        )}
      </h1>
      <ul className="flex flex-row justify-between space-x-6">
        <li className="font-[550] text-lg font-mono">
          {pathname === '/home' ? (
            <span className="text-primary">Home</span>
          ) : (
            <Link
              href="/home"
              className="text-muted-foreground hover:text-primary/75"
            >
              Home
            </Link>
          )}
        </li>
        <li className="font-[550] text-lg font-mono">
          {pathname === '/waste-quantity' ? (
            <span className="text-primary">Waste Quantity</span>
          ) : (
            <Link
              href="/waste-quantity"
              className="text-muted-foreground hover:text-primary/75"
            >
              Waste Quantity
            </Link>
          )}
        </li>

        <li className="font-[550] text-lg font-mono">
          {pathname === '/about' ? (
            <span className="text-primary">About</span>
          ) : (
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary/75"
            >
              About
            </Link>
          )}
        </li>
        <li className="font-[550] text-lg font-mono">
          {pathname === '/team' ? (
            <span className="text-primary">Team</span>
          ) : (
            <Link
              href="/team"
              className="text-muted-foreground hover:text-primary/75"
            >
              Team
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
