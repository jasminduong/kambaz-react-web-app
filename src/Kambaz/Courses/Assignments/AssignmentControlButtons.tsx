import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

/* Assignment control buttons with weight, plus button, and ellipsis */
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span
        className="assignment-percentage me-3"
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "4px 14px",
          fontSize: "13px",
        }}
      >
        40% of Total
      </span>
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
