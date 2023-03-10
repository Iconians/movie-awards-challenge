import { createContext, useContext, useState } from "react";

export const SelectionsContext = createContext({});

export const SelectionsProvider = ({ children }) => {
  const [selections, setSelections] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const updateSelection = (id, selection) => {
    const updateNominee = selections.map((nominee) => {
      if (nominee.id === id) {
        return { ...nominee, nominee: selection };
      }
      return nominee;
    });
    setSelections(updateNominee);
  };

  const selectedNominee = (id, selection) => {
    const ifInSelections = selections.filter((item) => item.id === id);
    if (ifInSelections.length) {
      updateSelection(id, selection);
    } else {
      setSelections([...selections, { id: id, nominee: selection }]);
    }
  };

  return (
    <SelectionsContext.Provider
      value={{
        selectedNominee,
        selections,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </SelectionsContext.Provider>
  );
};

export const useSelectionsContext = () => {
  const context = useContext(SelectionsContext);
  return {
    selectedNominee: context.selectedNominee,
    selections: context.selections,
    openModal: context.openModal,
    setOpenModal: context.setOpenModal,
  };
};
