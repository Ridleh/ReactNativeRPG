import react from "react";
import Store from "./Store";
import * as Interfaces from "../Interfaces/InterfaceIndex";

let Dispatch = Store.dispatch;

export const updatePartyMember = (
  partyMember: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "updatePartyMember", partyMember: partyMember });
};

export const getState = () => {
  return Store.getState();
};

export const getPartyState = () => {
  return Store.getState().Party;
};

export const addCharacterToParty = (
  character: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "addPartyMember", partyMember: character });
};

export const removePartyMemberFromParty = (partyMember: Interfaces.PartyMemberInterface) =>{
  Dispatch({type: "removePartyMember", partyMember: partyMember})
}

export const addCharacterToCharactersOwnedList = (
  character: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "addToCharactersOwned", character: character });
};

export const updateStateFromLocalStorage = (state: any) => {
  Dispatch({type: "updateStateFromLocalState", state: state});
}

