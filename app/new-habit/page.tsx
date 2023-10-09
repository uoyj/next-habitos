export default function NewHabit() {
  
async function addHabit(form: FormData){
    "use server"

    const habit = form.get("habit")
    console.log(habit)
}
  
  return (
    <main className="conatiner relative flex flex-col gap-8 px-12 pt-16">
        <h1 className="text-3xl font-light text-center text-white font-display">
            Add a new habit
        </h1>

        <form action={addHabit} className="flex flex-col gap-4 mt-4">
            <input type="text" name="habit" id="habit" autoComplete="off"
            className="p2 font-sans text-xl text-white rounded-md bg-neutral-800" />

            <button 
            className="bg-teal-500 font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8">
                Add</button>
            <button
            className="bg-neutral-800 font-display text-red-500 font-regular text-2xl p-2 rounded-md mt-8">Cancel</button>

        </form>
    </main>
  )
}
