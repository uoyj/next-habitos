import DayState from "@/components/DayState"
import { weekDays } from "@/services/calendar"
import { kv } from "@vercel/kv"
import Link from "next/link"
import { CgTrash } from "react-icons/cg"

type Habit = {
  [habit: string]: Record<string, boolean>
} | null

export default async function Home() {
  const habits: Habit = await kv.hgetall("habits")

  const todayWeekday = new Date().getDay()
  const sortedWeekDays = weekDays
    .slice(todayWeekday + 1)
    .concat(weekDays.slice(0, todayWeekday + 1))

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date()
      date.setDate(date.getDate() - index)
      return date.toISOString().slice(0, 10)
    })
    .reverse()

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length == 0 && (
          <h1 className="mt-20 text-3xl font-light text-white font-display text-center">
            You don{"'"}t have any habits registered yet!
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map( ([habit, dateStreak]) => (
          <div key={habit}>
            <section className="flex justify-between items-center">
              <span className="text-xl text-white font-light font-sans">
                {habit}
              </span>
              <button className="text-2xl text-red-500">
                <CgTrash alt="trash can" />
              </button>
            </section>
            <Link href={`habit/${habit}`}>
              <section className="grid grid-cols-7 bg-neutral-700 rounded-md p-2">
                {sortedWeekDays.map( (day, index) => (
                  <div
                    className="flex flex-col text-center last:font-bold"
                    key={day}
                  >
                    <span className="font-sans text-xs text-white">{day}</span>
                    <DayState done={dateStreak[last7Days[index]]} />
                  </div>
                ))}
              </section>
            </Link>
          </div>
        ))}

      <Link
        href="new-habit"
        className="fixed text-center bottom-10 w-2/3 left-1/2 p-2 -translate-x-1/2 text-neutral-800 bg-teal-500 font-regular text-2xl font-display rounded-md"
      >
        Add a habit
      </Link>
    </main>
  )
}
