import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";

/* Module control buttons with green check mark, plus button, and ellipsis */
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="me-2 position-relative" style={{ left: "1px", top: "-2px" }}/>
      <IoEllipsisVertical className="fs-5 position-relative" style={{ top: "-2px" }} />
    </div>
  );
}
