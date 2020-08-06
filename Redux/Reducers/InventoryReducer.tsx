const updateStateFromLocalStorage: string = "updateStateFromLocalStorage";
// ^ import instead?

interface Inventory {
  Helmets: Item[];
  Shoulders: Item[];
  Chests: Item[];
  Pants: Item[];
  Boots: Item[];
  Necklaces: Item[];
  Capes: Item[];
  Bracers: Item[];
  Gloves: Item[];
  Weapons: Item[];
}

const inventoryState = {
  Helmets: [],
  Shoulders: [],
  Chests: [],
  Pants: [],
  Boots: [],
  Necklaces: [],
  Capes: [],
  Bracers: [],
  Gloves: [],
  Weapons: [],
};

//TODO: Refactor
export default function inventoryReducer(state: Inventory = inventoryState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
  /*
    case updateStateFromLocalStorage:
      return Object.assign({}, state, {
        Weapons: action.state.Inventory.Weapons,
        Armors: action.state.Inventory.Armors,
        BlackMagicSpells: action.state.Inventory.BlackMagicSpells,
        WhiteMagicSpells: action.state.Inventory.WhiteMagicSpells
      });
    case addWeapon:
      return {
        ...state,
        Weapons: [...state.Weapons, action.weapon],
      };
      case removeWeapon:
        let newWeapons = state.Weapons.slice();
        let index = newWeapons.indexOf(action.weapon);
        newWeapons.splice(index, 1);
        return {
          ...state,
          Weapons: newWeapons,
        };
      case updateWeapon:
        return {
          ...state,
          Weapons: state.Weapons.map((item, index) => {
            if (item.ID !== action.weapon.ID) {
              return item;
            }
            return {
              ...item,
              ...action.weapon,
            };
          }),
        };
        case addArmor:
          return {
            ...state,
            Armors: [...state.Armors, action.armor],
          };
          case removeArmor:
            let newArmors = state.Armors.slice();
            let indexArmors = newArmors.indexOf(action.armor);
            newArmors.splice(indexArmors, 1);
            return {
              ...state,
              Armors: newArmors,
            };
          case updateArmor:
            return {
              ...state,
              Armors: state.Armors.map((item, index) => {
                if (item.ID !== action.armor.ID) {
                  return item;
                }
                return {
                  ...item,
                  ...action.armor,
                };
              }),
            };
            case addBlackMagicSpell:
              return {
                ...state,
                BlackMagicSpells: [...state.BlackMagicSpells, action.spell],
              };
              case removeBlackMagicSpell:
                let newSpells = state.BlackMagicSpells.slice();
                let indexBlackSpells = newSpells.indexOf(action.spell);
                newSpells.splice(indexBlackSpells, 1);
                return {
                  ...state,
                  BlackMagicSpells: newSpells,
                };
              case updateBlackMagicSpell:
                return {
                  ...state,
                  BlackMagicSpells: state.BlackMagicSpells.map((item, index) => {
                    if (item.ID !== action.spell.ID) {
                      return item;
                    }
                    return {
                      ...item,
                      ...action.spell,
                    };
                  }),
                };
                case addWhiteMagicSpell:
              return {
                ...state,
                WhiteMagicSpells: [...state.WhiteMagicSpells, action.spell],
              };
              case removeWhiteMagicSpell:
                let newWhiteMagicSpells = state.WhiteMagicSpells.slice();
                let indexWhiteSpells = newWhiteMagicSpells.indexOf(action.spell);
                newWhiteMagicSpells.splice(indexWhiteSpells, 1);
                return {
                  ...state,
                  BlackMagicSpells: newWhiteMagicSpells,
                };
              case updateWhiteMagicSpell:
                return {
                  ...state,
                  WhiteMagicSpells: state.WhiteMagicSpells.map((item, index) => {
                    if (item.ID !== action.spell.ID) {
                      return item;
                    }
                    return {
                      ...item,
                      ...action.spell,
                    };
                  }),
                };
                */
}
