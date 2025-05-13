import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

/* Lesson control buttons with green check mark and ellipsis*/
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5 position-relative" style={{ left: "1px", top: "-2px" }} />
    </div>
  );
}
