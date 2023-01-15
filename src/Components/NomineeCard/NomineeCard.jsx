import { NomineeSelectionBtn } from "../NomineeSelectBtn/NomineeSelectionBtn";
import "./NomineeCard.css";

export const NomineeCard = ({ title, img, id }) => {
  return (
    <div className="nominee-card-wrapper">
      <div className="nominee-name">
        <h3>{title}</h3>
      </div>
      <div className="image-wrapper">
        <img src={`${img}`} alt="broke" />
      </div>
      <div className="btn-div">
        <NomineeSelectionBtn title={title} id={id} />
      </div>
    </div>
  );
};
