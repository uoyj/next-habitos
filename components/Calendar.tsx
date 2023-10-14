"use client"
import { weekDays, getDaysInMonth } from "@/services/calendar"
import { useEffect, useState } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import DayState from "./DayState";

const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

interface CalendarProptype{
    habit: string,
    streak: Record<string, boolean> | null
}

export default function Calendar({habit, streak}: CalendarProptype) {
    const [userSelectedDate, setUserSelectedDate] = useState(new Date)
    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)
    const [daysInMonth, setDaysInMonth] = useState(
        getDaysInMonth(currentMonth, currentYear)
    )

    useEffect( () => {
        setDaysInMonth( getDaysInMonth(month,year) )
        setUserSelectedDate( new Date(year,month,1) )
    }, [month, year])

    function previousMonth(){
        if(month === 0){
            setYear(year - 1)
            setMonth(11)
        } else setMonth(month - 1)
    }

    function nextMonth(){
        if(month === 11){
            setYear(year + 1)
            setMonth(0)
        } else setMonth(month + 1)
    }

    function getMonthString(){
        return `${userSelectedDate.toLocaleString("en-US", {month: "long"})}`
    }

    function getDateString(date: Date){
        return `${year.toString()}-${(month + 1).toString().padStart(2,"0")}-${date.getDate().toString()}`
    }

  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
          <button onClick={previousMonth}>
            <CgArrowLeft className="w-5 h-5"/>
          </button>
          <span>{getMonthString()} {currentYear}</span>
          <button onClick={nextMonth}>
            <CgArrowRight className="w-5 h-5"/>
          </button>
        </div>
        <div className="grid w-full grid-cols-7 mt-2">
          {weekDays.map( (day) => (
            <div key={day} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-200">{day}</span>
            </div>
          ))}
          {daysInMonth.map( (day, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-400">
                {day?.getDate()}
              </span>
              {
                day && (
                    <DayState done={streak ? streak[getDateString(day)] : undefined} />
                )
              }
            </div>
          ))}
        </div>
      </section>
  )
}
