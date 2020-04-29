const buyItem: string = "buyItem";
const buySpell: string = "buySpell";
const giveGold: string = "giveGold";
const giveStamina: string = "giveStamina";
const updatePartyMember: string ="updatePartyMember";
// ^ import instead?

const MasterState = {
  playersGold: 1000,
  playersStamina: 100,
  party: [
    {
      Name: "Tryo",
      ID: 0,
      Level: 1,
      Health: 100,
      CurrentHealth: 100,
      Mana: 75,
      CurrentMana: 75,
      Attack: 10,
      Magic: 20,
      Mind: 5,
      Resistance: 15,
      Defence: 5,
      Luck: 0,
      Speed: 100,
      Items: [],
      Spells: [],
    },
    {
      Name: "Tryo 2",
      ID: 1,
      Level: 5,
      Health: 1100,
      CurrentHealth: 100,
      Mana: 175,
      CurrentMana: 75,
      Attack: 10,
      Magic: 20,
      Mind: 5,
      Resistance: 0,
      Defence: 0,
      Luck: 0,
      Speed: 100,
      Items: [],
      Spells: [],
    }
  ],
  items: [],
  spells: [],
};

//TODO: Refactor
function MasterReducer(state: any = MasterState, action: any) {
  switch (action.type) {
    case buyItem:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case buySpell:
      return {
        ...state,
        spells: [...state.spells, action.spell],
      };
    case giveGold:
      return {
        ...state,
        playersGold: state.playersGold + action.gold,
      };
    case giveStamina:
      return {
        ...state,
        playersStamina: state.playersStamina + action.stamina,
      };
      case updatePartyMember:
        return state.map((item: any, index: number) => {
          if(index !== action.partyMember.ID){
            return item;
          }
          return{
            ...item,
            ...action.PartyMember
          }
        })
    default:
      return state;
  }
}

export default MasterReducer;
