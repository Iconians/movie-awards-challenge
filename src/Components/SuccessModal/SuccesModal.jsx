import "./SuccessModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelectionsContext } from "../../Providers/Selections.Provider";
export const SuccessModal = () => {
  const { setOpenModal } = useSelectionsContext();
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="success-modal-wrapper">
      <div className="modal-body">
        <div className="heading-wrapper">
          <h2>Success</h2>
        </div>
        <div className="close-wrapper">
          <FontAwesomeIcon icon={faClose} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};
