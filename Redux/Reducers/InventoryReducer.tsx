import * as Interfaces from "../../Interfaces/InterfaceIndex";

const addItem: string = "addItem";
const addSpell: string = "addSpell";
const removeItem: string = "removeItem";
const removeSpell: string = "removeSpell";
// ^ import instead?

interface Inventory {
  Items: Interfaces.ItemInterface[];
  Spells: Interfaces.SpellInterface[];
}

const inventoryState = {
  Items: [],
  Spells: [],
};

//TODO: Refactor
function inventoryReducer(state: Inventory = inventoryState, action: any) {
  switch (action.type) {
    case addItem:
      console.log("insde addItem");
      return {
        ...state,
        Items: [...state.Items, action.item],
      };
    case removeItem:
      return {
        ...state,
        Items: [
          ...state.Items,
          state.Items.filter((item) => action.Item !== item),
        ],
      };
    case addSpell:
      return {
        ...state,
        Spells: [...state.Spells, action.spell],
      };
    case removeSpell:
      return {
        ...state,
        Spells: [
          ...state.Spells,
          state.Spells.filter((item) => action.Spells !== item),
        ],
      };
    default:
      return state;
  }
}

export default inventoryReducer;
