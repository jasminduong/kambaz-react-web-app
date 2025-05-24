import { Modal, FormControl, Button } from "react-bootstrap";

{
  /* ModuleEditor to create new modules */
}
export default function ModuleEditor({
  show,
  handleClose,
  dialogTitle,
  moduleName,
  setModuleName,
  addModule,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      {/* invokes the setModuleName function when editing the module name in the dialog text field */}
      <Modal.Body>
        <FormControl
          value={moduleName}
          onChange={(e) => {
            setModuleName(e.target.value);
          }}
        />
      </Modal.Body>
      {/* invokes the addModule function when the Add Module button is clicked */}
      <Modal.Footer>
        <Button variant="secondary" size="sm" className="me-2 bg-gray-fill" onClick={handleClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            addModule();
            handleClose();
          }}
        >
          {" "}
          Add Module{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
