import * as Interfaces from "../../Interfaces/InterfaceIndex";

const increaseGold: string = "increaseGold";
const decreaseGold: string = "decreaseGold";
const increaseStamina: string = "increaseStamina";
const decreaseStamina: string = "decreaseStamina";
const addPartyMember: string = "addPartyMember";
const removePartyMember: string = "removePartyMember";
const updatePartyMember: string = "updatePartyMember";
// ^ import instead?

interface Party {
  Gold: number;
  Stamina: number;
  Party: Interfaces.PartyMemberInterface[];
}

const PartyState = {
  Gold: 1000,
  Stamina: 100,
  Party: [],
};

//TODO: Refactor
function partyReducer(state: Party = PartyState, action: any) {
  switch (action.type) {
    case increaseGold:
      return {
        ...state,
        Gold: state.Gold - action.gold,
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
      return {
        ...state,
        Party: [
          ...state.Party,
          state.Party.filter((item) => action.partyMember !== item),
        ],
      };
    case updatePartyMember:
      return {
        ...state,
        Party: state.Party.map((item, index) => {
          if (item !== action.partyMember) {
            return item;
          }
          return {
            ...item,
            ...action.partyMember,
          };
        }),
      };
    default:
      return state;
  }
}

export default partyReducer;
