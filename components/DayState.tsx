import { ElementType } from "react";
import { CgCheck, CgClose, CgShapeCircle } from "react-icons/cg";

export default function DayState({ done }:{ done: boolean | undefined }) {
    
  let icon: [ElementType, string, string] = [CgShapeCircle, "lg", "gray-500"]
  
  if(done === true) icon = [CgCheck, "lg", "green-400"]
  if(done === false) icon = [CgClose, "lg", "red-500"]
    
  const [Element, size, color] = icon
  return (
    <div className={`flex items-center justify-center text-${size} text-${color}`}>
    <Element alt="checkmark" />
    </div>
  )
}
