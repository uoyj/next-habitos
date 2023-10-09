import { CgCheck, CgClose, CgShapeCircle } from "react-icons/cg";

export default function DayState({ done }:{ done: boolean | undefined }) {
    
  let icon = <CgShapeCircle className="text-gray-400" />

  if(done === true) icon = <CgCheck className="text-green-400" />
  if(done === false) icon = <CgClose className="text-red-500" />
    
  return (
    <div className="flex items-center justify-center text-lg">
      {icon}
    </div>
  )
}
