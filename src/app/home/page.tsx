import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 h-[calc(100vh-6rem)] place-content-center w-[70%] m-auto gap-12">
        <Link
          href="/waste-quantity"
          className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Card className="w-[350px] hover:bg-primary-foreground">
            <CardHeader>
              <CardTitle>Waste Quantity</CardTitle>
            </CardHeader>
            <CardContent>
              Check how much garbage can has been filled
            </CardContent>
          </Card>
        </Link>
        <Link
          href="/about"
          className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Card className="w-[350px] hover:bg-primary-foreground">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              Read about our project ~ Smart Waste Mangement Sytem
            </CardContent>
          </Card>
        </Link>
        <Link
          href="/team"
          className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent>
              Let's get to know our team members and their contributions
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
