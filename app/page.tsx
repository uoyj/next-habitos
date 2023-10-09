import DayState from "@/components/DayState";
import Link from "next/link";
import { CgTrash } from "react-icons/cg";

export default function Home() {
  const habits = {
    'drink water': {
      '2023-10-07': true,
      '2023-10-08': true,
      '2023-10-09': false,
      '2023-10-10': false,
      '2023-10-11': false
    },
    'study maths': {
      '2023-10-07': true,
      '2023-10-14': true,
      '2023-10-21': false,
      '2023-10-28': false,
      '2023-11-04': false
    }
  };

  const todayWeekday = new Date().getDay()
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const sortedWeekDays = weekDays.slice(todayWeekday + 1).concat(weekDays.slice(0, todayWeekday + 1))

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || (
      Object.keys(habits).length == 0 && (
        <h1 className="mt-20 text-3xl font-light text-white font-display text-center">You don{"'"}t have any habits registered yet!</h1>
      )
      )}
      {habits !== null && Object.entries(habits).map(([habit, dateStreak]) => (
        <div key={habit}>
          <section className="flex justify-between items-center">
            <span className="text-xl text-white font-light font-sans">{habit}</span>
            <button className="text-2xl text-red-500"><CgTrash alt="trash can"/></button>
          </section>
          <section className="grid grid-cols-7 bg-neutral-700 rounded-md p-2">
            {sortedWeekDays.map((day)=>(
              <div className="flex flex-col text-center last:font-bold" key={day}>
                <span className="font-sans text-xs text-white" >{day}</span>
                <DayState done={undefined} />
              </div>
            ))}
          </section>
        </div>
      )
      )}

      <Link href="new-habit" 
      className="fixed text-center bottom-10 w-2/3 left-1/2 p-2 -translate-x-1/2 text-neutral-800 bg-teal-500 font-regular text-2xl font-display rounded-md">
        Add a habit</Link>
    </main>
  )
}
