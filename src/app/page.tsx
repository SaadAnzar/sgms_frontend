import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Index() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl h-20 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-black/30">
              Smart Waste Management System
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto">
              Manage garbage the smart and efficient way
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mx-auto">
            <Button asChild>
              <Link href="/home">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
