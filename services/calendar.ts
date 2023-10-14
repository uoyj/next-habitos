const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1)
    const firstWeekDay = date.getDay()
    const emptyDays = Array<Date | null>(firstWeekDay).fill(null)
    const days = [...emptyDays]
    while (date.getMonth() === month){
        days.push(new Date(date))
        date.setDate( date.getDate() + 1 )
    }
    return days
}

export { weekDays, getDaysInMonth }