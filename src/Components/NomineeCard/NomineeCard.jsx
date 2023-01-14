import { NomineeSelectionBtn } from "../NomineeSelectBtn/NomineeSelectionBtn";

export const NomineeCard = ({ title, img }) => {
  console.log(img);
  return (
    <div className="nominee-card-wrapper">
      <div className="nominee-name">
        <h3>{title}</h3>
      </div>
      <div className="image-wrapper">
        <img src={`${img}`} alt="broke" />
      </div>
      <div className="btn-div">
        <NomineeSelectionBtn />
      </div>
    </div>
  );
};
