import { FaCheckCircle, FaCircle } from "react-icons/fa";

/* Green check mark in modules */
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle
        style={{ top: "1px" }}
        className="text-success me-1 position-absolute fs-6"
      />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
