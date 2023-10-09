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

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
            <button className="text-2xl text-red-500"><CgTrash/></button>
          </section>
          <section className="grid grid-cols-7 bg-neutral-700 rounded-md p-2">
            {weekDays.map((day)=>(
              <div className="flex flex-col" key={day}>
                <span className="font-sans text-xs text-white" >{day}</span>
                </div>
            ))}
            
          </section>
            {/* {JSON.stringify(dateStreak)} */}
        </div>
      )
      )}
    </main>
  )
}
