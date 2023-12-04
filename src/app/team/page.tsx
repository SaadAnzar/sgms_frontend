import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Team() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 h-[calc(100vh-6rem)] place-content-center w-[70%] m-auto gap-12">
        <div className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <Card className="w-[350px] hover:bg-primary-foreground">
            <CardHeader>
              <CardTitle>Krishankant Choudhary</CardTitle>
            </CardHeader>
            <CardContent>
              03915602820
              <br />
              F4
            </CardContent>
          </Card>
        </div>
        <div className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <Card className="w-[350px] hover:bg-primary-foreground">
            <CardHeader>
              <CardTitle>Md Anzar Ahmad</CardTitle>
            </CardHeader>
            <CardContent>
              04315602820
              <br />
              F4
            </CardContent>
          </Card>
        </div>
        <div className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Ritik Jha</CardTitle>
            </CardHeader>
            <CardContent>
              03915602820
              <br />
              F4
            </CardContent>
          </Card>
        </div>
        <div className="delay-15 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Preyrit Sharma</CardTitle>
            </CardHeader>
            <CardContent>
              03915602820
              <br />
              F4
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
