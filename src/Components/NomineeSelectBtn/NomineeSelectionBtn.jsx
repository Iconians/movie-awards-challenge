import { useSelectionsContext } from "../../Providers/Selections.Provider";

export const NomineeSelectionBtn = ({ id, title }) => {
  const nominee = title;
  const { selectedNominee } = useSelectionsContext();
  const saveSelection = ({ target: { id } }) => {
    selectedNominee(id, nominee);
  };
  return (
    <div className="btn-wrapper">
      <input type="submit" value="Select" id={id} onClick={saveSelection} />
    </div>
  );
};
