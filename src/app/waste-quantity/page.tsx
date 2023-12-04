'use client'

import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function WasteQuantity() {
  const [garbage, setGarbage] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      if (garbage <= 95) {
        setGarbage((prev) => prev + 5)
      }
    }, 3000)
  })

  return (
    <div className="m-4">
      <h1 className="text-center text-2xl font-bold">
        Smart Waste Management System
      </h1>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="border-blue-600 border-x-8 border-b-8 h-[400px] rounded-b-2xl w-[400px]">
          <Progress className="w-full rounded-b-lg" value={garbage} />
        </div>

        <h3 className="text-center text-lg font-semibold mt-4">{garbage} %</h3>
      </div>
    </div>
  )
}
