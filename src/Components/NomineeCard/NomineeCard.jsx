import { useSelectionsContext } from "../../Providers/Selections.Provider";
import { NomineeSelectionBtn } from "../NomineeSelectBtn/NomineeSelectionBtn";
import "./NomineeCard.css";

export const NomineeCard = ({ title, img, id }) => {
  const { selections } = useSelectionsContext();
  const selected = selections.filter((object) => object.nominee === title);
  return (
    <div
      className={`nominee-card-wrapper ${
        selected.length ? "selectedCard" : null
      }`}
    >
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
