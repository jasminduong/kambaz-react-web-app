import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

/* Individual Assignment control buttons with green check mark and ellipsis*/
export default function IndAssignmentControlButtons({
  assignmentId,
  deleteAssignment
}: {
  assignmentId: string;
  deleteAssignment: (AssignmentId: string) => void;
})  {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-3 mb-1"
        onClick={() => deleteAssignment(assignmentId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical
        className="fs-5 position-relative"
        style={{ left: "1px", top: "-2px" }}
      />
    </div>
  );
}
