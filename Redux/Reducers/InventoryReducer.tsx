const buyHelmet: string = "buyHelmet";
const buyShoulder: string = "buyShoulder";
const buyChest: string = "buyChest";
const buyPant: string = "buyPant";
const buyBoot: string = "buyBoot";
const buyNecklace: string = "buyNecklace";
const buyCape: string = "buyCape";
const buyBracer: string = "buyBracer";
const buyGlove: string = "buyGlove";
const buyWeapon: string = "buyWeapon";

const updateStateFromLocalStorage: string = "updateStateFromLocalStorage";
// ^ import instead?

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
export default function inventoryReducer(
  state: Inventory = inventoryState,
  action: action
) {
  switch (action.type) {
    case buyBoot:
      console.log('boot');
      let newBoots: Item[] = state.Boots.slice();
      newBoots.splice(0, 0, action.item);
      return {
        ...state,
        Boots: newBoots,
      };
    case buyBracer:
      console.log('bracer');
      let newBracers: Item[] = state.Bracers.slice();
      newBracers.splice(0, 0, action.item);
      return {
        ...state,
        Bracers: newBracers,
      };
    case buyCape:
      console.log('cape');
      let newCapes: Item[] = state.Capes.slice();
      newCapes.splice(0, 0, action.item);
      return {
        ...state,
        Capes: newCapes,
      };
    case buyChest:
      console.log('chest');
      let newChests: Item[] = state.Chests.slice();
      newChests.splice(0, 0, action.item);
      return {
        ...state,
        Chests: newChests,
      };
    case buyGlove:
      console.log('glove');
      let newGloves: Item[] = state.Gloves.slice();
      newGloves.splice(0, 0, action.item);
      return {
        ...state,
        Gloves: newGloves,
      };
    case buyHelmet:
      console.log('helmet');
      let newHelmets: Item[] = state.Helmets.slice();
      newHelmets.splice(0, 0, action.item);
      return {
        ...state,
        Helmets: newHelmets,
      };
    case buyNecklace:
      console.log('neck');
      let newNecklaces: Item[] = state.Necklaces.slice();
      newNecklaces.splice(0, 0, action.item);
      return {
        ...state,
        Necklaces: newNecklaces,
      };
    case buyPant:
      console.log('pant');
      let newPants: Item[] = state.Pants.slice();
      newPants.splice(0, 0, action.item);
      return {
        ...state,
        Pants: newPants,
      };
    case buyShoulder:
      console.log('shoulder');
      let newShoulders: Item[] = state.Shoulders.slice();
      newShoulders.splice(0, 0, action.item);
      return {
        ...state,
        Shoulders: newShoulders,
      };
    case buyWeapon:
      console.log('weapon');
      let newWeapons: Item[] = state.Weapons.slice();
      newWeapons.splice(0, 0, action.item);
      return {
        ...state,
        Weapons: newWeapons,
      };
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
