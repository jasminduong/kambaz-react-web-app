import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

/* Module control buttons with green check mark, plus button, and ellipsis */
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
      />

      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
      />
      <GreenCheckmark />
      <FaPlus
        className="me-2 position-relative"
        style={{ left: "1px", top: "-2px" }}
      />
      <IoEllipsisVertical
        className="fs-5 position-relative"
        style={{ top: "-2px" }}
      />
    </div>
  );
}
