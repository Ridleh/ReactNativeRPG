import * as Interfaces from "../../Interfaces/InterfaceIndex";

const increaseGold: string = "increaseGold";
const decreaseGold: string = "decreaseGold";
const increaseStamina: string = "increaseStamina";
const decreaseStamina: string = "decreaseStamina";
const addPartyMember: string = "addPartyMember";
const removePartyMember: string = "removePartyMember";
const updatePartyMember: string = "updatePartyMember";
const addToCharactersOwned: string = "addToCharactersOwned";
const removeFromCharactersOwned: string = "removeFromCharactersOwned";
const updateCharactersOwned: string = "updateCharactersOwned";
const updateStateFromLocalStorage: string = "updateStateFromLocalStorage";
const updateParty: string = "updateParty";
// ^ import instead?

interface Party {
  Gold: number;
  Stamina: number;
  Party: Interfaces.PartyMemberInterface[];
  CharactersOwned: Interfaces.PartyMemberInterface[];
}

const PartyState = {
  Gold: 10000,
  Stamina: 100,
  Party: [],
  CharactersOwned: [],
};

//TODO: Refactor
function partyReducer(state: Party = PartyState, action: any) {
  switch (action.type) {
    case updateStateFromLocalStorage:
      return Object.assign({}, state, {
        Gold: action.state.Party.Gold,
        Party: action.state.Party.Party,
        CharactersOwned: action.state.Party.CharactersOwned
      });
    case increaseGold:
      return {
        ...state,
        Gold: state.Gold + action.gold,
      };
    case decreaseGold:
      return {
        ...state,
        Gold: state.Gold - action.gold,
      };
    case increaseStamina:
      return {
        ...state,
        Stamina: state.Stamina + action.stamina,
      };
    case decreaseStamina:
      return {
        ...state,
        Stamina: state.Stamina - action.stamina,
      };
    case addPartyMember:
      return {
        ...state,
        Party: [...state.Party, action.partyMember],
      };
    case removePartyMember:
      let newParty = state.Party.slice();
      let index = newParty.indexOf(action.partyMember);
      newParty.splice(index, 1);
      return {
        ...state,
        Party: newParty,
      };
    case updatePartyMember:
      return {
        ...state,
        Party: state.Party.map((item, index) => {
          if (item.ID !== action.partyMember.ID) {
            return item;
          }
          return {
            ...item,
            ...action.partyMember,
          };
        }),
      };
    case addToCharactersOwned:
      return {
        ...state,
        CharactersOwned: [...state.CharactersOwned, action.character],
      };
    case removeFromCharactersOwned:
      return {
        ...state,
        CharactersOwned: [
          ...state.CharactersOwned,
          state.CharactersOwned.filter((item) => action.character !== item),
        ],
      };
    case updateCharactersOwned:
      return {
        ...state,
        CharactersOwned: state.CharactersOwned.map((item, index) => {
          if (item !== action.character) {
            return item;
          }
          return {
            ...item,
            ...action.character,
          };
        }),
      };
      case updateParty:
        return Object.assign({}, state, {
          Party: action.party,
        });
    default:
      return state;
  }
}

export default partyReducer;
