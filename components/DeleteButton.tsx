"use client"

import { deleteHabit } from "@/services/actions";
import { CgTrash } from "react-icons/cg";

export default function DeleteButton({habit}:{habit:string}) {
  return (
    <button className="text-2xl text-red-500" onClick={() => deleteHabit(habit)}>
        <CgTrash alt="trash can" />
    </button>
  )
}
