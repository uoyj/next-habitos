import { kv } from "@vercel/kv"
import Link from "next/link"
import { CgArrowLeftR } from "react-icons/cg"
import Calendar from "@/components/Calendar"

interface HabitProptype {
  params: { habit: string }
}

export default async function Habit({ params: { habit } }: HabitProptype) {
  const decodedHabit = decodeURI(habit)
  const habitStreak = await kv.hget<Record<string,boolean>>("habits", decodedHabit)

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center text-white font-display">
        {decodedHabit}
      </h1>

      <Link
        className="flex items-center font-sans text-md text-white gap-1"
        href="/"
      >
        <CgArrowLeftR className="w-5 h-5" />
        Back
      </Link>

      <Calendar habit={decodedHabit} streak={habitStreak}/>
      
    </main>
  )
}
